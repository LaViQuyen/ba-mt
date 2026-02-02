// src/pages/FullTestPage.jsx
import { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allTests } from '../data/index';
import parse, { domToReact } from 'html-react-parser';
import { GoogleGenerativeAI } from "@google/generative-ai"; 
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'; 

// --- CẤU HÌNH ---
const EMAIL_PUBLIC_KEY = "Tq7e72DxJoSIlhIU4";
const EMAIL_SERVICE_ID = "service_gvlyalu";
const EMAIL_TEMPLATE_LR = "template_dbls4x9";      
const EMAIL_TEMPLATE_WRITING = "template_h4voh6v"; 

const API_KEY_GEMINI = import.meta.env.VITE_GEMINI_API_KEY;

export default function FullTestPage() {
  const { testId, skill } = useParams(); 
  const navigate = useNavigate();
  const testData = allTests.find(t => t.id === testId);
  const audioRef = useRef(null);

  // --- SỬA LẠI LOGIC TÍNH THỜI GIAN ---
  const initialTime = useMemo(() => {
     // 1. Kiểm tra xem trong file data có cấu hình thời gian riêng không?
     // (Ví dụ: listening có timeLimit: 2400)
     const sectionConfig = testData?.sections?.[skill];
     if (sectionConfig && sectionConfig.timeLimit) {
         return sectionConfig.timeLimit;
     }

     // 2. Nếu không có cấu hình riêng, dùng thời gian mặc định
     if (skill === 'listening') return 30 * 60; // Mặc định 30p
     if (skill === 'reading') return 60 * 60;   // Mặc định 60p
     if (skill === 'writing') return 60 * 60;   // Mặc định 60p
     
     return 0;
  }, [skill, testData]);

  const [isTestStarted, setIsTestStarted] = useState(true);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [answers, setAnswers] = useState({}); 
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState({ score: 0, total: 0 });

  // State Writing
  const [activeWritingTask, setActiveWritingTask] = useState('task1');
  const [isGrading, setIsGrading] = useState(false);
  const [aiResultTask1, setAiResultTask1] = useState(null);
  const [aiResultTask2, setAiResultTask2] = useState(null);

  // --- READING TOOLS STATE ---
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, type: 'none' }); 
  const [notes, setNotes] = useState({}); 
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
  const savedRange = useRef(null);
  const currentNoteId = useRef(null); 

  // Kích hoạt EmailJS
  useEffect(() => { emailjs.init(EMAIL_PUBLIC_KEY); }, []);
  
  useEffect(() => {
      setIsTestStarted(true); 
      setTimeLeft(initialTime);
      setAnswers({});
      setIsSubmitted(false);
      setShowResult(false);
      setAiResultTask1(null);
      setAiResultTask2(null);
      setNotes({});
      setContextMenu({ visible: false, x: 0, y: 0, type: 'none' });
  }, [skill, initialTime]);

  useEffect(() => {
    if (!isTestStarted || showResult) return; 
    const timer = setInterval(() => {
        setTimeLeft(prev => {
            if (prev <= 0) { clearInterval(timer); if(!isSubmitted) handleSubmitAuto(); return 0; }
            return prev - 1;
        });
    }, 1000);
    return () => clearInterval(timer);
  }, [isTestStarted, showResult, isSubmitted]);

  useEffect(() => {
      if (skill === 'listening' && audioRef.current) {
          audioRef.current.play().catch(error => {
              console.log("Autoplay blocked:", error);
          });
      }
  }, [skill]);

  // --- SECURITY: CHẶN COPY/PRINT ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey) {
        if (['c', 'p'].includes(e.key.toLowerCase())) {
          e.preventDefault();
          toast.warning("🚫 Hành động này bị cấm!");
          return false;
        }
      }
    };
    const handleCopy = (e) => { e.preventDefault(); toast.warning("🚫 Không được phép sao chép!"); };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('copy', handleCopy);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('copy', handleCopy);
    };
  }, []);

  // --- HELPER FUNCTIONS ---
  if (!testData) return <div className="container">❌ Không tìm thấy đề thi!</div>;

  const getStudentId = () => localStorage.getItem("currentStudentId") || "Guest Candidate";
  const formatTime = (s) => `${Math.floor(s / 3600)}:${Math.floor((s % 3600) / 60).toString().padStart(2,'0')}:${(s % 60).toString().padStart(2,'0')}`;
  const formatTimeStr = (seconds) => `${Math.floor(seconds / 60)}m ${seconds % 60}s`;

    // --- 1. XỬ LÝ DANH SÁCH CÂU HỎI (HỖ TRỢ TÁCH SỐ CÂU HỎI GỘP) ---
    const flatQuestions = useMemo(() => {
        if (skill === 'writing') return [];
        const section = testData.sections[skill];
        if (!section) return [];
        
        let list = [];
        section.questions.forEach(part => {
            if (part.items) {
                part.items.forEach(item => {
                    // Trường hợp câu hỏi gộp (VD: 11-12)
                    if (item.qNums && Array.isArray(item.qNums)) {
                        item.qNums.forEach(num => {
                            list.push({ 
                                qNum: num, 
                                isGroup: true, 
                                mainId: item.qNums[0] // Lưu ID của câu đầu tiên trong nhóm để scroll
                            });
                        });
                    } 
                    // Trường hợp câu hỏi đơn (VD: 1)
                    else if (item.qNum) {
                        list.push(item);
                    }
                });
            }
        });
        return list.sort((a,b) => a.qNum - b.qNum);
    }, [skill, testData]);

        // --- 2. LOGIC CUỘN ĐẾN CÂU HỎI (HỖ TRỢ GỘP) ---
        // --- 2. LOGIC CUỘN ĐẾN CÂU HỎI (ĐÃ FIX CHO DẠNG GAP-FILL) ---
    const scrollToQuestion = (qNum) => {
        // 1. Ưu tiên tìm ID điều hướng (Dành cho MCQ, Matching, Map)
        let el = document.getElementById(`nav-q-${qNum}`);
        
        // 2. Nếu không thấy, tìm trực tiếp ID của ô Input (Dành cho Gap-fill/HTML)
        if (!el) {
            el = document.getElementById(`q-${qNum}`);
        }

        // 3. Nếu vẫn không thấy, thử tìm ID của nhóm câu hỏi (Dành cho MCQ gộp 11-12)
        if (!el) {
            const qItem = flatQuestions.find(i => i.qNum === qNum);
            if (qItem && qItem.mainId) {
                el = document.getElementById(`nav-q-${qItem.mainId}`);
            }
        }

        // 4. Thực hiện hành động cuộn
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            
            // Nếu là ô điền từ, tự động focus con trỏ chuột vào để gõ luôn
            if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
                el.focus();
            }
        } else {
            console.warn(`Cannot find element for Question ${qNum}`);
        }
    };

    const handleInputChange = (key, val) => setAnswers(prev => ({ ...prev, [key]: val }));

    // --- GENERATE HTML LOG FOR EMAIL ---
    const generateDetailedLog = (calculatedScore) => {
        let html = `<table style="width:100%; border-collapse: collapse; font-family: monospace; font-size: 13px;">`;
        let rowBuffer = "";

        flatQuestions.forEach((item, index) => {
            const userAns = (answers[item.qNum] || "").trim();
            const correctArr = Array.isArray(item.answer) ? item.answer : [item.answer];
            const isCorrect = correctArr.some(ans => ans.toString().toLowerCase() === userAns.toLowerCase());

            const cellBg = isCorrect ? "#f0fff4" : "#fff5f5";
            const cellColor = isCorrect ? "#155724" : "#d32f2f";
            const icon = isCorrect ? "✅" : "❌";
            const displayVal = userAns === "" ? "<em>(trống)</em>" : `<strong>${userAns}</strong>`;

            rowBuffer += `
                <td style="border: 1px solid #ddd; padding: 8px; background-color: ${cellBg}; color: ${cellColor}; width: 25%;">
                    <div style="font-size:11px; color:#666;">Q${item.qNum}</div>
                    <div>${displayVal} ${icon}</div>
                </td>
            `;

            if ((index + 1) % 4 === 0) {
                html += `<tr>${rowBuffer}</tr>`;
                rowBuffer = "";
            }
        });

        if (rowBuffer !== "") html += `<tr>${rowBuffer}</tr>`;
        html += `</table>`;
        return html;
    };

    const generateWritingFeedbackHTML = (aiResult, taskType) => {
        if (!aiResult || !aiResult.criteria) return "<em>Chưa chấm điểm AI.</em>";
        const { criteria, band } = aiResult;
        let html = `<table style="width:100%; border-collapse: collapse; font-family: monospace; font-size: 13px;">`;
        const keysOrder = taskType === 'task1' ? ['TA', 'CC', 'LR', 'GRA'] : ['TR', 'CC', 'LR', 'GRA'];
        keysOrder.forEach(key => {
            const item = criteria[key];
            if(item) {
                html += `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px; color: #002554; font-weight: bold; width: 60px;">${key}</td><td style="padding: 8px; color: #333;">${item.text || item.comment}</td><td style="padding: 8px; text-align: right;"><span style="background: #002554; color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold;">${item.score}</span></td></tr>`;
            }
        });
        html += `<tr><td colspan="3" style="padding: 10px; text-align: right; background-color: #e8f5e9; color: #2e7d32; font-weight: bold; border-top: 2px solid #ddd;">BAND SCORE: ${band}</td></tr></table>`;
        return html;
    };

    const sendEmailReport = (score, total, type, detailedLog = "") => {
        const studentId = getStudentId();
        const timeTaken = formatTimeStr(initialTime - timeLeft);
        const now = new Date().toLocaleString('vi-VN');
        let templateParams = {};
        let templateId = "";

        if (type === 'lr') {
            templateId = EMAIL_TEMPLATE_LR;
            templateParams = { test_name: skill.toUpperCase(), student_name: studentId, score: score, total: total, time_taken: timeTaken, submission_time: now, detailed_answers: detailedLog };
        } else {
            templateId = EMAIL_TEMPLATE_WRITING;
            let overallText = "Chấm sau";
            if (aiResultTask1 && aiResultTask2) {
                const band1 = parseFloat(aiResultTask1.band || 0);
                const band2 = parseFloat(aiResultTask2.band || 0);
                overallText = ((band1 + band2 * 2) / 3).toFixed(1); 
            } else if (aiResultTask1 || aiResultTask2) {
                overallText = (aiResultTask1?.band || aiResultTask2?.band) + " (Partial)";
            }
            templateParams = { student_name: studentId, overall_score: overallText, time_taken: timeTaken, submission_time: now, task1_content: answers['writing_task1'] || "(No submission)", task1_feedback: generateWritingFeedbackHTML(aiResultTask1, 'task1'), task2_content: answers['writing_task2'] || "(No submission)", task2_feedback: generateWritingFeedbackHTML(aiResultTask2, 'task2') };
        }
        emailjs.send(EMAIL_SERVICE_ID, templateId, templateParams).then(() => console.log("Email sent!")).catch((err) => console.error("Email failed:", err));
    };

    const handleSubmitAuto = () => { if(skill === 'writing') handleSubmitWriting(true); else handleSubmitLR(true); }
    
    const handleSubmitLR = (auto = false) => {
        if(!auto && !window.confirm("Bạn có chắc chắn muốn nộp bài không?")) return;
        let score = 0; let total = flatQuestions.length;
        flatQuestions.forEach(item => {
            const u = (answers[item.qNum] || "").trim().toLowerCase();
            const c = Array.isArray(item.answer) ? item.answer : [item.answer];
            if (c.some(ans => ans.toString().toLowerCase() === u)) score++;
        });
        const logHtml = generateDetailedLog(score);
        setIsSubmitted(true); setResultData({ score, total }); setShowResult(true);
        sendEmailReport(score, total, 'lr', logHtml);
        toast.success("🎉 Nộp bài thành công! Kết quả đã được gửi về hệ thống.");
    };

    const handleSubmitWriting = (auto = false) => {
        if(!auto && !window.confirm("Nộp bài Writing?")) return;
        setIsSubmitted(true); setShowResult(true); 
        sendEmailReport(0, 0, 'writing');
        toast.success("📝 Bài Writing của bạn đã được nộp.");
    };

    const gradeSingleTask = async (taskKey, essayContent, model) => {
        const taskCriterion = taskKey === 'task1' ? "TA" : "TR";
        const questionContent = (testData.sections.writing[taskKey].prompt || "No prompt").replace(/<[^>]*>?/gm, '');
        const prompt = `You are an austere IELTS Examiner. Task: ${taskKey}. Question: ${questionContent} Student Essay: "${essayContent}" Please grade strict JSON: { "band": 0.0, "comment": "summary", "criteria": { "${taskCriterion}": { "score": 0, "text": "..." }, "CC": { "score": 0, "text": "..." }, "LR": { "score": 0, "text": "..." }, "GRA": { "score": 0, "text": "..." } } }`;
        const result = await model.generateContent(prompt);
        const jsonStr = result.response.text().match(/\{[\s\S]*\}/)?.[0];
        if (jsonStr) {
            const scoreData = JSON.parse(jsonStr);
            if (taskKey === 'task1') { if(scoreData.criteria.TR) { scoreData.criteria.TA = scoreData.criteria.TR; delete scoreData.criteria.TR; } } 
            else { if(scoreData.criteria.TA) { scoreData.criteria.TR = scoreData.criteria.TA; delete scoreData.criteria.TA; } }
            return scoreData;
        }
        return null;
    };

    const handleUnifiedGrading = async () => {
        const t1 = answers['writing_task1'] || "";
        const t2 = answers['writing_task2'] || "";
        if (t1.length < 10 && t2.length < 10) { toast.warning("⚠️ Cả 2 bài làm đều quá ngắn!"); return; }
        setIsGrading(true); toast.info("🤖 AI đang chấm bài...");
        try {
            const genAI = new GoogleGenerativeAI(API_KEY_GEMINI);
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
            const promises = [];
            if (t1.length >= 10) promises.push(gradeSingleTask('task1', t1, model).then(res => setAiResultTask1(res)));
            if (t2.length >= 10) promises.push(gradeSingleTask('task2', t2, model).then(res => setAiResultTask2(res)));
            await Promise.all(promises);
            toast.success("✅ Đã hoàn tất chấm điểm!");
        } catch (error) { toast.error("❌ Lỗi AI: " + error.message); } finally { setIsGrading(false); }
    };

    const renderHTML = (htmlString) => {
        const options = {
        replace: (domNode) => {
            if (domNode.name === 'input' && domNode.attribs?.class?.includes('gap-input')) {
            const qNum = domNode.attribs['data-qnum'];
            return <input className="gap-input" id={`q-${qNum}`} data-qnum={qNum} value={answers[qNum] || ''} onChange={(e) => handleInputChange(qNum, e.target.value)} />;
            }
            if (domNode.name === 'select' && domNode.attribs?.class?.includes('gap-select')) {
                const qNum = domNode.attribs['data-qnum'];
                return <select className="gap-select" id={`q-${qNum}`} data-qnum={qNum} value={answers[qNum] || ''} onChange={(e) => handleInputChange(qNum, e.target.value)}>{domToReact(domNode.children)}</select>;
            }
            if (domNode.name === 'input' && (domNode.attribs?.type === 'radio' || domNode.attribs?.type === 'checkbox')) {
                const nameAttr = domNode.attribs['name']; const qNum = nameAttr.replace('q-', ''); const val = domNode.attribs['value'];
                return <input type={domNode.attribs.type} name={nameAttr} value={val} checked={answers[qNum] === val} onChange={() => handleInputChange(qNum, val)} style={{cursor: 'pointer', transform: 'scale(1.2)', marginRight: '8px'}} />;
            }
        }
        };
        return parse(htmlString || "", options);
    };

    // 🔥 HÀM MỚI: CHUẨN HÓA GIAO DIỆN (ĐÃ SỬA LABELLING GRID THÀNH DẠNG BẢNG RADIO) 🔥
    const renderStructuredQuestion = (part) => {
        
        // --- Hàm phụ: Xóa số thứ tự có sẵn trong text
        const cleanText = (text, qNum) => {
            if (!text) return "";
            const strNum = String(qNum);
            
            // Sử dụng Regex để kiểm tra chính xác hơn
            // Chỉ xóa nếu số bắt đầu dòng và theo sau là dấu chấm, dấu đóng ngoặc hoặc khoảng trắng
            // Ví dụ: "18. Text" -> Xóa. "1877" -> Giữ nguyên.
            const regex = new RegExp(`^${strNum}([.\\s\\)]+|$)`);

            if (regex.test(text.trim())) {
                return text.trim().replace(regex, '').trim();
            }
            return text;
        };

        // --- 1. DẠNG MATCHING (NỐI) ---
        if (part.type === 'matching' || part.type === 'matching_headings' || part.type === 'matching_info') {
            const opts = part.options || ['A','B','C','D','E','F'];
            return (
                <div>
                    {part.options && <div style={{background:'#f9f9f9', padding:'10px', marginBottom:'15px', fontWeight:'bold', border:'1px solid #eee', fontSize:'0.95rem'}} dangerouslySetInnerHTML={{__html: part.options.join('<br>')}} />}
                    
                    {part.items.map(item => (
                        <div key={item.qNum} style={{display:'flex', justifyContent:'space-between', marginBottom:'15px', alignItems:'center', borderBottom:'1px dashed #eee', paddingBottom:'8px'}}>
                            <div style={{display: 'flex', alignItems: 'center', flex: 1, marginRight: '15px'}}>
                                <strong style={{marginRight: '5px', minWidth: '25px', color: 'inherit'}}>{item.qNum}.</strong>
                                <span style={{fontWeight: '700', color: 'inherit'}}>{cleanText(item.text, item.qNum)}</span>
                            </div>
                            
                            <select className="gap-select" value={answers[item.qNum] || ''} onChange={(e) => handleInputChange(item.qNum, e.target.value)} style={{minWidth:'80px'}}>
                                <option value="">...</option>
                                {opts.map(o => {
                                    const val = o.includes('.') ? o.split('.')[0].trim() : o.trim();
                                    return <option key={val} value={val}>{val}</option>;
                                })}
                            </select>
                            <div id={`nav-q-${item.qNum}`}></div>
                        </div>
                    ))}
                </div>
            );
        }

        // --- 2. DẠNG TRẮC NGHIỆM (MCQ) ---
        if (part.type === 'mcq_single' || part.type === 'mcq_multi' || part.type === 'mcq') {
            return (
                <div>
                {part.items.map(item => {
                    // Xác định hiển thị số câu (đơn hoặc gộp)
                    const qDisplay = item.qNum || item.qNums?.join(', ');
                    // ID dùng để scroll (nếu gộp thì lấy số đầu tiên)
                    const navId = item.qNum || item.qNums?.[0];
                    
                    const currentOptions = item.options || part.options || [];

                    // --- LOGIC XỬ LÝ CHỌN ĐÁP ÁN CHO DẠNG GỘP (MULTI) ---
                    const handleMultiChange = (val) => {
                        if (!item.qNums) return; // Không phải dạng gộp thì bỏ qua
                        
                        // 1. Lấy các đáp án hiện tại của nhóm này
                        let currentSelected = item.qNums.map(q => answers[q]).filter(Boolean);

                        // 2. Logic Toggle (Chọn/Bỏ chọn)
                        if (currentSelected.includes(val)) {
                            currentSelected = currentSelected.filter(v => v !== val);
                        } else {
                            if (currentSelected.length < item.qNums.length) {
                                currentSelected.push(val);
                            }
                        }

                        // 3. Cập nhật vào state answers (Gán lần lượt vào các câu 11, 12...)
                        const newAnswers = { ...answers };
                        item.qNums.forEach(q => delete newAnswers[q]); // Xóa cũ
                        currentSelected.sort().forEach((ans, idx) => {
                            newAnswers[item.qNums[idx]] = ans; // Gán mới
                        });
                        setAnswers(newAnswers);
                    };

                    return (
                        <div key={qDisplay} style={{marginBottom:'25px'}}>
                            <div style={{marginBottom:'10px', color:'inherit', fontWeight:'700', fontSize:'1rem'}} id={`nav-q-${navId}`}>
                                <span>{qDisplay}. </span>
                                <span>{cleanText(part.stem || item.text || "Choose the correct answer:", qDisplay)}</span>
                            </div>

                            <div style={{marginLeft:'20px'}}>
                                {currentOptions.map(opt => {
                                    const val = opt.split('.')[0].trim();
                                    
                                    // Kiểm tra trạng thái Checked
                                    let isChecked = false;
                                    if (part.type === 'mcq_multi' && item.qNums) {
                                        // Dạng gộp: Kiểm tra xem val có nằm trong các đáp án đã chọn không
                                        const selectedValues = item.qNums.map(q => answers[q]);
                                        isChecked = selectedValues.includes(val);
                                    } else {
                                        // Dạng đơn
                                        isChecked = answers[item.qNum] === val;
                                    }

                                    return (
                                        <label key={val} style={{display:'flex', alignItems:'flex-start', marginBottom:'8px', cursor:'pointer', padding:'6px', borderRadius:'4px', transition:'0.2s', background: isChecked ? '#e3f2fd' : 'transparent'}}>
                                            <input 
                                                type={part.type === 'mcq_multi' ? 'checkbox' : 'radio'} 
                                                name={part.type === 'mcq_multi' ? `group-${navId}` : `q-${item.qNum}`}
                                                value={val} 
                                                checked={isChecked} 
                                                onChange={() => {
                                                    if (part.type === 'mcq_multi') {
                                                        handleMultiChange(val);
                                                    } else {
                                                        handleInputChange(item.qNum, val);
                                                    }
                                                }} 
                                                style={{marginTop:'4px', marginRight:'10px', transform:'scale(1.2)', flexShrink:0}} 
                                            />
                                            <span style={{lineHeight:'1.4'}}>{opt}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
                </div>
            );
        }

        // --- 3. DẠNG TRUE/FALSE/NOT GIVEN ---
        if (part.type === 'tfng' || part.type === 'ynng') {
            const options = part.type === 'tfng' ? ['TRUE', 'FALSE', 'NOT GIVEN'] : ['YES', 'NO', 'NOT GIVEN'];
            return (
                <div>
                    <div style={{marginBottom:'15px', fontStyle:'italic', color:'#666', fontSize:'0.9rem'}}>Select one option for each statement:</div>
                    {part.items.map(item => (
                        <div key={item.qNum} style={{marginBottom:'20px', borderBottom:'1px dashed #eee', paddingBottom:'15px'}}>
                            <div style={{marginBottom:'10px', fontSize:'1rem', fontWeight:'700', color:'inherit'}} id={`nav-q-${item.qNum}`}>
                                <span>{item.qNum}. </span>
                                <span>{cleanText(item.text, item.qNum)}</span>
                            </div>

                            <div style={{display:'flex', gap:'15px', marginLeft:'20px', flexWrap:'wrap'}}>
                                {options.map(opt => (
                                    <label key={opt} style={{cursor:'pointer', fontSize:'0.9rem', display:'flex', alignItems:'center', background: answers[item.qNum] === opt ? '#e3f2fd' : '#f5f5f5', padding:'6px 12px', borderRadius:'20px', border: answers[item.qNum] === opt ? '1px solid #2196f3' : '1px solid #ddd', transition:'0.2s'}}>
                                        <input 
                                            type="radio" 
                                            name={`q-${item.qNum}`} 
                                            value={opt} 
                                            checked={answers[item.qNum] === opt} 
                                            onChange={() => handleInputChange(item.qNum, opt)} 
                                            style={{marginRight:'6px', transform:'scale(1.1)'}}
                                        />
                                        {opt}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        // --- 4. DẠNG LABELLING GRID (Map/Diagram Labeling) - SỬA LẠI THÀNH DẠNG BẢNG RADIO ---
        if (part.type === 'labelling_grid') {
            const opts = part.options || ['A','B','C','D','E','F','G'];
            return (
                <div>
                    {/* Hiển thị hình ảnh bản đồ */}
                    {part.image && (
                        <div style={{marginBottom: '25px', textAlign: 'center'}}>
                            <img 
                                src={part.image} 
                                alt="Map Labeling" 
                                style={{maxWidth: '100%', maxHeight: '500px', border: '1px solid #ddd', borderRadius: '4px', padding:'5px'}} 
                            />
                        </div>
                    )}

                    {/* Bảng chọn đáp án (Radio Grid) */}
                    <div style={{overflowX: 'auto', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)'}}>
                        <table style={{width: '100%', borderCollapse: 'collapse', minWidth: '500px'}}>
                            <thead style={{background: '#f5f7fa', borderBottom: '2px solid #e1e4e8'}}>
                                <tr>
                                    <th style={{padding: '12px 15px', textAlign: 'left', color: '#002554', fontWeight: '800'}}>Question</th>
                                    {opts.map(opt => (
                                        <th key={opt} style={{padding: '12px 5px', textAlign: 'center', color: '#002554', fontWeight: '800', width: '40px'}}>{opt}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {part.items.map((item, index) => (
                                    <tr key={item.qNum} style={{borderBottom: '1px solid #eee', backgroundColor: index % 2 === 0 ? '#fff' : '#fafafa'}} id={`nav-q-${item.qNum}`}>
                                        <td style={{padding: '12px 15px', fontWeight: '600', color: '#333'}}>
                                            <strong style={{marginRight: '8px'}}>{item.qNum}</strong> 
                                            {cleanText(item.text, item.qNum)}
                                        </td>
                                        {opts.map(opt => (
                                            <td key={opt} style={{textAlign: 'center', padding: '10px'}}>
                                                <input 
                                                    type="radio" 
                                                    name={`q-${item.qNum}`} 
                                                    value={opt} 
                                                    checked={answers[item.qNum] === opt} 
                                                    onChange={() => handleInputChange(item.qNum, opt)}
                                                    style={{cursor: 'pointer', width: '18px', height: '18px', accentColor: '#002554'}}
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }

        return <div style={{color:'red'}}>Unsupported Question Type: {part.type}</div>;
    };

  // ... (Giữ nguyên logic Reading Tools) ...
  useEffect(() => {
    if (skill !== 'reading') return;
    const handleContextMenu = (e) => {
        const readingArea = document.querySelector('.reading-left-pane');
        if (!readingArea || !readingArea.contains(e.target)) return;
        e.preventDefault();
        const sel = window.getSelection();
        const range = sel.rangeCount > 0 ? sel.getRangeAt(0) : null;
        let type = 'none';
        const targetNote = e.target.closest('.note-attached');
        if (targetNote) { type = 'note-context'; currentNoteId.current = targetNote.id; } 
        else if (range && !sel.isCollapsed && range.toString().trim().length > 0) { type = 'selection'; savedRange.current = range.cloneRange(); } 
        else if (isInsideHighlight(e.target)) { type = 'highlight-context'; const range = document.createRange(); range.selectNode(e.target); savedRange.current = range; } 
        else { setContextMenu({ visible: false, x: 0, y: 0, type: 'none' }); return; }
        setContextMenu({ visible: true, x: e.clientX, y: e.clientY, type });
    };
    const handleClick = () => { if (contextMenu.visible) setContextMenu({ ...contextMenu, visible: false }); };
    document.addEventListener('contextmenu', handleContextMenu); document.addEventListener('click', handleClick);
    return () => { document.removeEventListener('contextmenu', handleContextMenu); document.removeEventListener('click', handleClick); };
  }, [skill, contextMenu.visible]);

  const isInsideHighlight = (node) => { if (node.nodeType === 3) node = node.parentNode; return window.getComputedStyle(node).backgroundColor === 'rgb(255, 255, 0)' || window.getComputedStyle(node).backgroundColor === '#ffff00'; };
  const doHighlight = () => { if (!savedRange.current) return; const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(savedRange.current); document.designMode = "on"; if (!document.execCommand("hiliteColor", false, "#ffff00")) document.execCommand("backColor", false, "#ffff00"); document.designMode = "off"; sel.removeAllRanges(); setContextMenu({ ...contextMenu, visible: false }); };
  const doClearHighlight = () => { if (!savedRange.current) return; const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(savedRange.current); document.designMode = "on"; document.execCommand("removeFormat", false, null); document.designMode = "off"; sel.removeAllRanges(); setContextMenu({ ...contextMenu, visible: false }); };
  const doAddNote = () => { if (!savedRange.current) return; const noteId = 'note-' + Date.now(); const span = document.createElement('span'); span.className = 'note-attached'; span.id = noteId; try { savedRange.current.surroundContents(span); } catch (e) { toast.info("💡 Vui lòng chỉ chọn văn bản trong cùng một đoạn văn để thêm ghi chú."); return; } setNotes(prev => ({ ...prev, [noteId]: { content: '', isOpen: true, x: contextMenu.x, y: contextMenu.y } })); window.getSelection().removeAllRanges(); setContextMenu({ ...contextMenu, visible: false }); };
  const doDeleteNote = () => { if (!currentNoteId.current) return; const id = currentNoteId.current; const span = document.getElementById(id); if (span) { const parent = span.parentNode; while (span.firstChild) parent.insertBefore(span.firstChild, span); parent.removeChild(span); } const newNotes = { ...notes }; delete newNotes[id]; setNotes(newNotes); setContextMenu({ ...contextMenu, visible: false }); };
  const handleNoteInteraction = (e) => { const target = e.target.closest('.note-attached'); if (target) { const id = target.id; if (e.type === 'mouseover') { if (notes[id] && notes[id].content && !notes[id].isOpen) { setTooltip({ visible: true, content: notes[id].content, x: e.clientX, y: e.clientY }); } } else if (e.type === 'mouseout') { setTooltip(prev => ({ ...prev, visible: false })); } else if (e.type === 'click') { setNotes(prev => ({ ...prev, [id]: { ...prev[id], isOpen: true, x: e.clientX, y: e.clientY } })); setTooltip(prev => ({ ...prev, visible: false })); } } };

  const readingPassageRender = useMemo(() => {
      if (skill !== 'reading') return null;
      return <div className="reading-left-pane" onClick={handleNoteInteraction} onMouseOver={handleNoteInteraction} onMouseOut={handleNoteInteraction}>{renderHTML(testData.sections.reading.passage)}</div>;
  }, [skill, testData.sections.reading.passage]);

  // --- RENDER VIEW ---
  if (showResult) {
      return (
        <div className="result-screen">
            <h2 style={{fontSize: '2rem', marginBottom: '20px', color: '#000'}}>Test Finished</h2>
            {skill !== 'writing' && <div className="result-score">{resultData.score} / {resultData.total}</div>}
            <h3 style={{margin: '20px 0', color: '#333'}}>Student ID: {getStudentId()}</h3>
            <button className="btn-home" onClick={() => navigate(`/test-menu/${testId}`)}><i className="fa-solid fa-house"></i> Home</button>
        </div>
      );
  }

  return (
    <div className="test-page-layout">
      {contextMenu.visible && (
          <div className="ctx-menu" style={{ top: contextMenu.y, left: contextMenu.x, display: 'block' }}>
              {contextMenu.type === 'selection' && (<><div className="ctx-menu-item" onClick={doHighlight}><i className="fa-solid fa-highlighter" style={{color:'#d4b106'}}></i> Highlight</div><div className="ctx-menu-item" onClick={doAddNote}><i className="fa-solid fa-sticky-note" style={{color:'#f57c00'}}></i> Add Note</div></>)}
              {contextMenu.type === 'highlight-context' && (<div className="ctx-menu-item" onClick={doClearHighlight}><i className="fa-solid fa-eraser" style={{color:'#666'}}></i> Clear Highlight</div>)}
              {contextMenu.type === 'note-context' && (<div className="ctx-menu-item" onClick={doDeleteNote} style={{color:'red'}}><i className="fa-solid fa-trash"></i> Delete Note</div>)}
          </div>
      )}
      {tooltip.visible && <div className="note-tooltip" style={{ display:'block', top: tooltip.y + 15, left: tooltip.x + 15 }}>{tooltip.content}</div>}
      {Object.entries(notes).map(([id, note]) => (note.isOpen && (<div key={id} className="note-popup" style={{ top: note.y, left: note.x }}><div className="note-header"><span>Note</span><span className="note-close" onClick={() => setNotes(prev => ({...prev, [id]: {...prev[id], isOpen: false}}))}>×</span></div><textarea className="note-textarea" placeholder="Type your note here..." value={note.content} onChange={(e) => setNotes(prev => ({...prev, [id]: {...prev[id], content: e.target.value}}))}/></div>)))}

      {/* HEADER */}
      <div className="test-header">
        <div className="header-left"><img src="/images/logo.png" alt="Logo" className="test-logo" /></div>
        <div className="header-center"><div className="timer-box"><i className="fa-regular fa-clock"></i> {formatTime(timeLeft)}</div></div>
        <div className="header-right">
            {skill === 'writing' && (
                <button className="btn-ai-header" onClick={handleUnifiedGrading} disabled={isGrading}>
                    <i className="fa-solid fa-wand-magic-sparkles"></i> {isGrading ? ' Grading...' : ' AI Grade'}
                </button>
            )}
            <button className="submit-btn" onClick={() => skill==='writing' ? handleSubmitWriting(false) : handleSubmitLR(false)}>
                {skill === 'writing' ? 'SUBMIT WRITING' : 'SUBMIT TEST'}
            </button>
        </div>
      </div>

      <div className="test-main-content">
          {skill === 'listening' && (
              <div className="listening-container">
                  <audio ref={audioRef} src={testData.sections.listening.audioSrc} style={{display:'none'}} />
                  <div className="questions-area">
                      {renderHTML(testData.sections.listening.passage || "")}
                      {testData.sections.listening.questions.map((part, i) => (
                        <div key={i} className="question-part">
                            <h3>{part.title}</h3>
                            
                            {/* 🔥 MỚI THÊM: Hiển thị hướng dẫn làm bài (Instruction) */}
                            {part.instruction && (
                                <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '15px' }}>
                                    {part.instruction}
                                </p>
                            )}

                            <div className="content-box">
                                {part.htmlContent ? renderHTML(part.htmlContent) : renderStructuredQuestion(part)}
                            </div>
                        </div>
                    ))}
                  </div>
              </div>
          )}
          
          {skill === 'reading' && (
              <div className="reading-container">
                  {readingPassageRender}
                  <div className="reading-right-pane">
                    {testData.sections.reading.questions.map((part, i) => (
                        <div key={i} className="question-part">
                            <h3>{part.title}</h3>

                            {/* 🔥 MỚI THÊM: Hiển thị hướng dẫn làm bài cho Reading */}
                            {part.instruction && (
                                <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '15px' }}>
                                    {part.instruction}
                                </p>
                            )}

                            <div className="content-box">
                                {part.htmlContent ? renderHTML(part.htmlContent) : renderStructuredQuestion(part)}
                            </div>
                        </div>
                    ))}
                  </div>
              </div>
          )}

          {/* ... Phần Writing giữ nguyên ... */}
          {skill === 'writing' && (
              <div className="writing-wrapper">
                  <div className="writing-tabs-bar">
                      <button className={`w-tab-btn ${activeWritingTask==='task1'?'active':''}`} onClick={()=>setActiveWritingTask('task1')}>Task 1</button>
                      <button className={`w-tab-btn ${activeWritingTask==='task2'?'active':''}`} onClick={()=>setActiveWritingTask('task2')}>Task 2</button>
                  </div>
                  <div className="writing-workspace">
                    <div className="w-left-pane">          
                        <div className="w-header-part">
                            <h2 style={{color: '#002554', margin: '0 0 10px', fontSize: '1.4rem'}}>{activeWritingTask === 'task1' ? 'WRITING TASK 1' : 'WRITING TASK 2'}</h2>
                            <p style={{color: '#666', fontStyle: 'italic', marginBottom: '20px'}}>You should spend about {activeWritingTask === 'task1' ? '20' : '40'} minutes on this task.</p>
                        </div>
                        <div className="prompt-box">
                            {testData.sections.writing && testData.sections.writing[activeWritingTask] ? (
                                <>{renderHTML((testData.sections.writing[activeWritingTask].prompt || testData.sections.writing[activeWritingTask].content || "").replace(/\n/g, '<br/>'))}
                                {activeWritingTask === 'task1' && (
                                    <>
                                        {testData.sections.writing.task1.images && testData.sections.writing.task1.images.length > 0 && (
                                            testData.sections.writing.task1.images.map((imgUrl, index) => (
                                                <img key={index} src={imgUrl} alt={`Task 1 Part ${index+1}`} className="task-img" style={{marginBottom: '15px'}} />
                                            ))
                                        )}
                                        {testData.sections.writing.task1.image && !testData.sections.writing.task1.images && (
                                            <img src={testData.sections.writing.task1.image} alt="Task 1 Chart" className="task-img" />
                                        )}
                                    </>
                                )}</>
                            ) : (<p>Đang tải đề bài...</p>)}
                        </div>
                    </div>
                    <div className="w-right-pane">
                        <textarea className="writing-textarea" placeholder="Type your answer here..." value={answers[`writing_${activeWritingTask}`] || ''} onChange={(e) => handleInputChange(`writing_${activeWritingTask}`, e.target.value)} />
                        <div className="meta-row">Word Count: <strong>{(answers[`writing_${activeWritingTask}`] || "").split(/\s+/).filter(w => w.length > 0).length}</strong></div>
                        {(activeWritingTask === 'task1' ? aiResultTask1 : aiResultTask2) && (
                            <div className="grading-box">
                                {(() => {
                                    const res = activeWritingTask === 'task1' ? aiResultTask1 : aiResultTask2;
                                    const criteria = res.criteria;
                                    const keysOrder = activeWritingTask === 'task1' ? ['TA', 'CC', 'LR', 'GRA'] : ['TR', 'CC', 'LR', 'GRA'];
                                    return (
                                        <>
                                            {keysOrder.map(key => (
                                                criteria[key] && (
                                                <div key={key} className="grade-row">
                                                    <span className="grade-label">{key}</span>
                                                    <span className="grade-text">{criteria[key].text || criteria[key].comment}</span>
                                                    <span className="grade-score">{criteria[key].score}</span>
                                                </div>
                                                )
                                            ))}
                                            <div className="task-overall">BAND SCORE: {res.band}</div>
                                        </>
                                    );
                                })()}
                            </div>
                        )}
                    </div>
                  </div>
              </div>
          )}
      </div>
      {skill !== 'writing' && (
          <div className="test-footer">
              {flatQuestions.map(item => (<div key={item.qNum} className={`q-nav-btn ${answers[item.qNum] ? 'done' : ''}`} onClick={() => scrollToQuestion(item.qNum)}>{item.qNum}</div>))}
          </div>
      )}
    </div>
  );
}