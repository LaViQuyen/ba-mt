// src/pages/FullTestPage.jsx
import { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allTests } from '../data/index';
import parse, { domToReact } from 'html-react-parser';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { generateContentWithRotation } from '../utils/geminiHelper';

// 👉 THÊM IMPORT FIREBASE
import { ref, push, set } from "firebase/database";
import { db } from '../firebase';

// --- CẤU HÌNH ---
const EMAIL_PUBLIC_KEY = "Tq7e72DxJoSIlhIU4";
const EMAIL_SERVICE_ID = "service_gvlyalu";
const EMAIL_TEMPLATE_LR = "template_dbls4x9";
const EMAIL_TEMPLATE_WRITING = "template_h4voh6v";

export default function FullTestPage() {
    const { testId, skill } = useParams();
    const navigate = useNavigate();
    const testData = allTests.find(t => t.id === testId);
    const audioRef = useRef(null);

    // --- TIMER SETUP ---
    const initialTime = useMemo(() => {
        const sectionConfig = testData?.sections?.[skill];
        if (sectionConfig && sectionConfig.timeLimit) return sectionConfig.timeLimit;
        if (skill === 'listening') return 30 * 60;
        if (skill === 'reading') return 60 * 60;
        if (skill === 'writing') return 60 * 60;
        return 0;
    }, [skill, testData]);

    // --- STATE ---
    const [isTestStarted, setIsTestStarted] = useState(true);
    const [timeLeft, setTimeLeft] = useState(() => {
        const savedTime = localStorage.getItem(`ielts_time_${testId}_${skill}`);
        if (savedTime && !isNaN(savedTime)) {
            return parseInt(savedTime, 10);
        }
        return initialTime;
    });
    
    const saveKey = `ielts_save_${testId}_${skill}`;
    
    const [answers, setAnswers] = useState(() => {
        const savedAnswers = localStorage.getItem(saveKey);
        if (savedAnswers) {
            try {
                return JSON.parse(savedAnswers);
            } catch (e) {
                return {};
            }
        }
        return {};
    });

    const answersRef = useRef(answers);
    useEffect(() => { answersRef.current = answers; }, [answers]);

    const timeLeftRef = useRef(timeLeft);
    useEffect(() => { timeLeftRef.current = timeLeft; }, [timeLeft]);

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [resultData, setResultData] = useState({ score: 0, total: 0 });

    // State cho Writing
    const [activeWritingTask, setActiveWritingTask] = useState('task1');
    const [isGrading, setIsGrading] = useState(false);
    const [aiResultTask1, setAiResultTask1] = useState(null);
    const [aiResultTask2, setAiResultTask2] = useState(null);

    // State Modal Xác nhận
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    useEffect(() => {
        localStorage.setItem(saveKey, JSON.stringify(answers));
    }, [answers, saveKey]);

    useEffect(() => {
        const timeSaveKey = `ielts_time_${testId}_${skill}`;
        localStorage.setItem(timeSaveKey, timeLeft.toString());
    }, [timeLeft, testId, skill]);

    useEffect(() => {
        const savedTime = localStorage.getItem(`ielts_time_${testId}_${skill}`);
        if (savedTime && !isNaN(savedTime)) {
            setTimeLeft(parseInt(savedTime, 10));
        } else {
            setTimeLeft(initialTime);
        }
    }, [skill, testId, initialTime]);

    // State cho Note & Highlight
    const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, type: 'none' });
    const [notes, setNotes] = useState({});
    const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
    const savedRange = useRef(null);
    const currentNoteId = useRef(null);
    const [dragData, setDragData] = useState({ isDragging: false, noteId: null, offsetX: 0, offsetY: 0 });

    // 👉 NÂNG CẤP HÀM LƯU LỊCH SỬ (ASYNC & FIREBASE)
    const saveToHistory = async (type, scoreOrBand, totalQuestions = 0, extra = {}) => {
        const studentId = localStorage.getItem("currentStudentId") || "Guest";
        const studentName = localStorage.getItem("currentStudentName") || "Học viên";

        const record = {
            id: Date.now(),
            type: type, 
            date: new Date().toISOString(),
            studentId,
            studentName,
            testId: testId,
            testName: testData?.testName || "Full Mock Test",
            skill: skill.toUpperCase()
        };

        if (skill === 'writing') {
            record.band = scoreOrBand;
            record.t1Band = extra.t1Band;
            record.t2Band = extra.t2Band;
        } else {
            record.score = scoreOrBand;
            record.total = totalQuestions;
        }

        if (studentId === "Guest") {
            // Nếu là Khách -> Lưu LocalStorage
            const history = JSON.parse(localStorage.getItem("ielts_history") || "[]");
            history.push(record);
            localStorage.setItem("ielts_history", JSON.stringify(history));
        } else {
            // Nếu là Học viên -> Đẩy lên Firebase
            try {
                const historyRef = ref(db, `history/${studentId}`);
                const newRecordRef = push(historyRef); // Tạo ID ngẫu nhiên trên Cloud
                await set(newRecordRef, record); // Đẩy dữ liệu lên
            } catch (error) {
                console.error("Lỗi Firebase:", error);
                toast.error("Cloud Error: Lưu tạm vào máy.");
                const history = JSON.parse(localStorage.getItem("ielts_history") || "[]");
                history.push(record);
                localStorage.setItem("ielts_history", JSON.stringify(history));
            }
        }
    };

    // --- LOGIC KÉO THẢ NOTE ---
    const handleNoteDragStart = (e, id) => {
        e.preventDefault();
        const note = notes[id];
        const clientX = e.clientX || e.touches?.[0].clientX;
        const clientY = e.clientY || e.touches?.[0].clientY;
        setDragData({ isDragging: true, noteId: id, offsetX: clientX - note.x, offsetY: clientY - note.y });
    };

    useEffect(() => {
        const handleDragMove = (e) => {
            if (!dragData.isDragging) return;
            const clientX = e.clientX || e.touches?.[0].clientX;
            const clientY = e.clientY || e.touches?.[0].clientY;
            setNotes(prev => ({ ...prev, [dragData.noteId]: { ...prev[dragData.noteId], x: clientX - dragData.offsetX, y: clientY - dragData.offsetY } }));
        };
        const handleDragEnd = () => { if (dragData.isDragging) setDragData({ isDragging: false, noteId: null, offsetX: 0, offsetY: 0 }); };

        if (dragData.isDragging) {
            window.addEventListener('mousemove', handleDragMove); window.addEventListener('mouseup', handleDragEnd);
            window.addEventListener('touchmove', handleDragMove); window.addEventListener('touchend', handleDragEnd);
        }
        return () => {
            window.removeEventListener('mousemove', handleDragMove); window.removeEventListener('mouseup', handleDragEnd);
            window.removeEventListener('touchmove', handleDragMove); window.removeEventListener('touchend', handleDragEnd);
        };
    }, [dragData]);

    useEffect(() => { emailjs.init(EMAIL_PUBLIC_KEY); }, []);

    useEffect(() => {
        setIsTestStarted(true);
        setIsSubmitted(false);
        setShowResult(false);
        setAiResultTask1(null);
        setAiResultTask2(null);
        setNotes({});
        setShowConfirmModal(false);
        setContextMenu({ visible: false, x: 0, y: 0, type: 'none' });

        const currentSaveKey = `ielts_save_${testId}_${skill}`;
        const savedAnswers = localStorage.getItem(currentSaveKey);
        if (savedAnswers) {
            try { setAnswers(JSON.parse(savedAnswers)); }
            catch (e) { setAnswers({}); }
        } else {
            setAnswers({});
        }
    }, [skill, testId]);

    useEffect(() => {
        if (!isTestStarted || showResult) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 0) { clearInterval(timer); if (!isSubmitted) handleSubmitAuto(); return 0; }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [isTestStarted, showResult, isSubmitted]);

    useEffect(() => {
        if (skill === 'listening' && audioRef.current) {
            const audioEl = audioRef.current;

            const syncAndPlay = () => {
                const savedTime = localStorage.getItem(`ielts_time_${testId}_${skill}`);
                let currentLeft = initialTime;
                if (savedTime && !isNaN(savedTime)) {
                    currentLeft = parseInt(savedTime, 10);
                }

                const elapsedTime = initialTime - currentLeft;
                if (elapsedTime > 0 && elapsedTime < initialTime) {
                    audioEl.currentTime = elapsedTime;
                }

                audioEl.play().catch(e => console.log("Autoplay blocked by browser policy:", e));
            };

            if (audioEl.readyState >= 1) {
                syncAndPlay();
            } else {
                audioEl.addEventListener('loadedmetadata', syncAndPlay, { once: true });
            }
        }
    }, [skill, testId, initialTime]);

    if (!testData) return <div className="container">❌ Không tìm thấy đề thi!</div>;

    const getStudentId = () => localStorage.getItem("currentStudentId") || "Guest Candidate";
    const formatTime = (s) => `${Math.floor(s / 3600)}:${Math.floor((s % 3600) / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;
    const formatTimeStr = (seconds) => `${Math.floor(seconds / 60)}m ${seconds % 60}s`;

    const flatQuestions = useMemo(() => {
        if (skill === 'writing') return [];
        const section = testData.sections[skill];
        if (!section) return [];
        let list = [];
        section.questions.forEach(part => {
            if (part.items) {
                part.items.forEach(item => {
                    if (item.qNums && Array.isArray(item.qNums)) {
                        item.qNums.forEach(num => { list.push({ qNum: num, isGroup: true, mainId: item.qNums[0], ...item }); });
                    } else if (item.qNum) { list.push(item); }
                });
            }
        });
        return list.sort((a, b) => a.qNum - b.qNum);
    }, [skill, testData]);

    const scrollToQuestion = (qNum) => {
        let el = document.getElementById(`nav-q-${qNum}`) || document.getElementById(`q-${qNum}`);
        if (!el) { const qItem = flatQuestions.find(i => i.qNum === qNum); if (qItem && qItem.mainId) el = document.getElementById(`nav-q-${qItem.mainId}`); }
        if (el) { el.scrollIntoView({ behavior: "smooth", block: "center" }); if (['INPUT', 'SELECT'].includes(el.tagName)) el.focus(); }
    };

    const handleInputChange = (key, val) => setAnswers(prev => ({ ...prev, [key]: val }));

    const renderHTML = (htmlString) => parse(htmlString || "", {
        replace: (domNode) => {
            if (domNode.name === 'span' && domNode.attribs?.class?.includes('q-badge-inline')) {
                return <></>;
            }

            if (domNode.name === 'input' && domNode.attribs?.class?.includes('gap-input')) {
                const qNum = domNode.attribs['data-qnum'];
                return <input
                    className="gap-input"
                    id={`q-${qNum}`}
                    data-qnum={qNum}
                    placeholder={qNum}
                    value={answers[qNum] || ''}
                    onChange={(e) => handleInputChange(qNum, e.target.value)}
                    autoComplete="off"
                    spellCheck="false"
                />;
            }

            if (domNode.name === 'select' && domNode.attribs?.class?.includes('gap-select')) { const qNum = domNode.attribs['data-qnum']; return <select className="gap-select" id={`q-${qNum}`} data-qnum={qNum} value={answers[qNum] || ''} onChange={(e) => handleInputChange(qNum, e.target.value)}>{domToReact(domNode.children)}</select>; }
            if (domNode.name === 'input' && (domNode.attribs?.type === 'radio' || domNode.attribs?.type === 'checkbox')) { const nameAttr = domNode.attribs['name']; const qNum = nameAttr.replace('q-', ''); const val = domNode.attribs['value']; return <input type={domNode.attribs.type} name={nameAttr} value={val} checked={answers[qNum] === val} onChange={() => handleInputChange(qNum, val)} style={{ cursor: 'pointer', transform: 'scale(1.2)', marginRight: '8px' }} />; }
        }
    });

    const renderStructuredQuestion = (part) => {
        const cleanText = (text, qNum) => { if (!text) return ""; const strNum = String(qNum); const regex = new RegExp(`^${strNum}([.\\s\\)]+|$)`); if (regex.test(text.trim())) { return text.trim().replace(regex, '').trim(); } return text; };

        if (part.type === 'matching' || part.type === 'matching_headings' || part.type === 'matching_info') {
            return (
                <div>
                    {part.options && <div style={{ background: '#f9f9f9', padding: '10px', marginBottom: '15px', fontWeight: 'bold', border: '1px solid #eee', fontSize: '0.95rem' }} dangerouslySetInnerHTML={{ __html: part.options.join('<br>') }} />}
                    {part.items.map(item => (
                        <div key={item.qNum} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px', gap: '12px' }}>
                            <strong style={{ flexShrink: 0, marginTop: '2px', fontSize: '1.05rem', color: 'black' }}>{item.qNum}.</strong>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', minWidth: 0 }}>
                                <span style={{ lineHeight: '1.6' }}>{item.text}</span>
                                <select className="gap-select" style={{ width: 'fit-content', maxWidth: '100%', margin: '0', padding: '8px 15px', cursor: 'pointer' }} value={answers[item.qNum] || ""} onChange={(e) => handleInputChange(item.qNum, e.target.value)}>
                                    <option value="">---  ---</option>
                                    {part.options.map((opt, idx) => {
                                        const optVal = opt.split('.')[0].trim();
                                        return <option key={idx} value={optVal}>{opt}</option>;
                                    })}
                                </select>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        if (part.type === 'mcq_single' || part.type === 'mcq_multi' || part.type === 'mcq') {
            return (
                <div>
                    {part.items.map(item => {
                        const qDisplay = item.qNum || item.qNums?.join(', ');
                        const navId = item.qNum || item.qNums?.[0];
                        const currentOptions = item.options || part.options || [];
                        const handleMultiChange = (val) => {
                            if (!item.qNums) return;
                            let currentSelected = item.qNums.map(q => answers[q]).filter(Boolean);
                            if (currentSelected.includes(val)) { currentSelected = currentSelected.filter(v => v !== val); }
                            else { if (currentSelected.length < item.qNums.length) { currentSelected.push(val); } }
                            const newAnswers = { ...answers };
                            item.qNums.forEach(q => delete newAnswers[q]);
                            currentSelected.sort().forEach((ans, idx) => { newAnswers[item.qNums[idx]] = ans; });
                            setAnswers(newAnswers);
                        };
                        return (
                            <div key={qDisplay} style={{ marginBottom: '25px' }}>
                                <div style={{ marginBottom: '10px', color: 'inherit', fontWeight: '700', fontSize: '1rem' }} id={`nav-q-${navId}`}>
                                    <span>{qDisplay}. </span>
                                    <span>{cleanText(part.stem || item.text || "Choose the correct answer:", qDisplay)}</span>
                                </div>
                                <div style={{ marginLeft: '20px' }}>
                                    {currentOptions.map(opt => {
                                        const val = opt.split('.')[0].trim();
                                        let isChecked = false;
                                        if (part.type === 'mcq_multi' && item.qNums) { const selectedValues = item.qNums.map(q => answers[q]); isChecked = selectedValues.includes(val); }
                                        else { isChecked = answers[item.qNum] === val; }
                                        return (
                                            <label key={val} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px', cursor: 'pointer', padding: '6px', borderRadius: '4px', transition: '0.2s', background: isChecked ? '#e3f2fd' : 'transparent' }}>
                                                <input type={part.type === 'mcq_multi' ? 'checkbox' : 'radio'} name={part.type === 'mcq_multi' ? `group-${navId}` : `q-${item.qNum}`} value={val} checked={isChecked} onChange={() => { if (part.type === 'mcq_multi') { handleMultiChange(val); } else { handleInputChange(item.qNum, val); } }} style={{ marginTop: '4px', marginRight: '10px', transform: 'scale(1.2)', flexShrink: 0 }} />
                                                <span style={{ lineHeight: '1.4' }}>{opt}</span>
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

        if (part.type === 'tfng' || part.type === 'ynng') {
            const options = part.type === 'tfng' ? ['TRUE', 'FALSE', 'NOT GIVEN'] : ['YES', 'NO', 'NOT GIVEN'];
            return (
                <div>
                    <div style={{ marginBottom: '15px', fontStyle: 'italic', color: '#666', fontSize: '0.9rem' }}>Select one option for each statement:</div>
                    {part.items.map(item => (
                        <div key={item.qNum} style={{ marginBottom: '20px', borderBottom: '1px dashed #eee', paddingBottom: '15px' }}>
                            <div style={{ marginBottom: '10px', fontSize: '1rem', color: 'inherit', lineHeight: '1.6' }} id={`nav-q-${item.qNum}`}>
                                <strong style={{ color: 'black', marginRight: '5px' }}>{item.qNum}.</strong>
                                <span>{cleanText(item.text, item.qNum)}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '15px', marginLeft: '20px', flexWrap: 'wrap' }}>
                                {options.map(opt => (
                                    <label key={opt} style={{ cursor: 'pointer', fontSize: '0.9rem', display: 'flex', alignItems: 'center', background: answers[item.qNum] === opt ? '#e3f2fd' : '#f5f5f5', padding: '6px 12px', borderRadius: '20px', border: answers[item.qNum] === opt ? '1px solid #2196f3' : '1px solid #ddd', transition: '0.2s' }}>
                                        <input type="radio" name={`q-${item.qNum}`} value={opt} checked={answers[item.qNum] === opt} onChange={() => handleInputChange(item.qNum, opt)} style={{ marginRight: '6px', transform: 'scale(1.1)' }} />
                                        {opt}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        if (part.type === 'labelling_grid') {
            const opts = part.options || ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
            return (
                <div>
                    {part.image && (<div style={{ marginBottom: '25px', textAlign: 'center' }}> <img src={part.image} alt="Map Labeling" style={{ maxWidth: '100%', maxHeight: '500px', border: '1px solid #ddd', borderRadius: '4px', padding: '5px' }} /> </div>)}
                    <div style={{ overflowX: 'auto', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
                            <thead style={{ background: '#f5f7fa', borderBottom: '2px solid #e1e4e8' }}>
                                <tr>
                                    <th style={{ padding: '12px 15px', textAlign: 'left', color: '#002554', fontWeight: '800' }}>Question</th>
                                    {opts.map(opt => (<th key={opt} style={{ padding: '12px 5px', textAlign: 'center', color: '#002554', fontWeight: '800', width: '40px' }}>{opt}</th>))}
                                </tr>
                            </thead>
                            <tbody>
                                {part.items.map((item, index) => (
                                    <tr key={item.qNum} style={{ borderBottom: '1px solid #eee', backgroundColor: index % 2 === 0 ? '#fff' : '#fafafa' }} id={`nav-q-${item.qNum}`}>
                                        <td style={{ padding: '12px 15px', fontWeight: '600', color: '#333' }}> <strong style={{ marginRight: '8px' }}>{item.qNum}</strong> {cleanText(item.text, item.qNum)} </td>
                                        {opts.map(opt => (<td key={opt} style={{ textAlign: 'center', padding: '10px' }}> <input type="radio" name={`q-${item.qNum}`} value={opt} checked={answers[item.qNum] === opt} onChange={() => handleInputChange(item.qNum, opt)} style={{ cursor: 'pointer', width: '18px', height: '18px', accentColor: '#002554' }} /> </td>))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
        return <div style={{ color: 'red' }}>Unsupported Question Type: {part.type}</div>;
    };

    const gradeSingleTask = async (taskKey, essayContent) => {
        if (!essayContent || essayContent.length < 10) return null;

        const taskCriterion = taskKey === 'task1' ? "TA" : "TR";
        const questionContent = (testData.sections.writing[taskKey].prompt || "No prompt").replace(/<[^>]*>?/gm, '');

        const prompt = `You are an IELTS Examiner. Task: ${taskKey}.
      Question: "${questionContent}"
      Essay: "${essayContent}"
      
      Output ONLY strict JSON (no markdown, no extra text):
      {
        "criteria": {
          "${taskCriterion}": { "score": 6.0, "text": "brief comment" },
          "CC": { "score": 6.0, "text": "brief comment" },
          "LR": { "score": 6.0, "text": "brief comment" },
          "GRA": { "score": 6.0, "text": "brief comment" }
        }
      }`;

        try {
            const responseText = await generateContentWithRotation(prompt);
            console.log(`[AI ${taskKey} Result]:`, responseText);

            let cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();

            const scoreData = JSON.parse(cleanJson);
            const cr = scoreData.criteria;

            const scores = [cr[taskCriterion]?.score || 0, cr.CC?.score || 0, cr.LR?.score || 0, cr.GRA?.score || 0];
            const avg = scores.reduce((a, b) => a + b, 0) / 4;
            scoreData.band = (Math.round(avg * 2) / 2).toString();

            if (taskKey === 'task1' && cr.TR) { cr.TA = cr.TR; delete cr.TR; }
            else if (taskKey === 'task2' && cr.TA) { cr.TR = cr.TA; delete cr.TA; }

            return scoreData;

        } catch (error) {
            console.error("AI Parse Error:", error);
            toast.warning(`⚠️ Lỗi AI: ${error.message}`);
            return null;
        }
    };

    const handleUnifiedGrading = async () => {
        const t1 = answers['writing_task1'] || "";
        const t2 = answers['writing_task2'] || "";
        if (t1.length < 10 && t2.length < 10) { toast.warning("⚠️ Bài làm quá ngắn!"); return; }

        setIsGrading(true);
        toast.info("🤖 Đang chấm điểm... Vui lòng đợi!");

        try {
            let isSuccess = false;
            let res1 = null;
            let res2 = null;

            if (t1.length >= 10) {
                res1 = await gradeSingleTask('task1', t1);
                if (res1) { setAiResultTask1(res1); isSuccess = true; }
            }

            if (t1.length >= 10 && t2.length >= 10) {
                await new Promise(resolve => setTimeout(resolve, 3000));
            }

            if (t2.length >= 10) {
                res2 = await gradeSingleTask('task2', t2);
                if (res2) { setAiResultTask2(res2); isSuccess = true; }
            }

            if (!res1 && !res2) {
                toast.error("❌ Hệ thống chấm điểm thất bại. Vui lòng thử lại.");
            } else {
                toast.success("✅ Đã hoàn tất chấm điểm!");
            }

        } catch (error) {
            toast.error("❌ Lỗi hệ thống: " + error.message);
        } finally {
            setIsGrading(false);
        }
    };

    const generateWritingFeedbackHTML = (aiResult, taskType) => {
        if (!aiResult || !aiResult.criteria) return "<em>Chưa chấm điểm AI.</em>";
        const { criteria, band } = aiResult;
        let html = `<table style="width:100%; border-collapse: collapse; font-family: monospace; font-size: 13px;">`;
        const keysOrder = taskType === 'task1' ? ['TA', 'CC', 'LR', 'GRA'] : ['TR', 'CC', 'LR', 'GRA'];
        keysOrder.forEach(key => {
            const item = criteria[key];
            if (item) html += `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px; color: #002554; font-weight: bold; width: 60px;">${key}</td><td style="padding: 8px; color: #333;">${item.text || item.comment}</td><td style="padding: 8px; text-align: right;"><span style="background: #002554; color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold;">${item.score}</span></td></tr>`;
        });
        html += `<tr><td colspan="3" style="padding: 10px; text-align: right; background-color: #e8f5e9; color: #2e7d32; font-weight: bold; border-top: 2px solid #ddd;">BAND SCORE: ${band}</td></tr></table>`;
        return html;
    };

    const generateDetailedLog = (calculatedScore) => {
        let html = `<table style="width:100%; border-collapse: collapse; font-family: monospace; font-size: 13px;">`;
        let rowBuffer = "";

        const validQuestions = flatQuestions.filter(q => q.qNum);

        validQuestions.forEach((item, index) => {
            const userAns = (answersRef.current[item.qNum] || "").trim();

            let isCorrect = false;
            if (item.answer) {
                const correctArr = Array.isArray(item.answer) ? item.answer : [item.answer];
                isCorrect = correctArr.some(ans => ans && ans.toString().toLowerCase() === userAns.toLowerCase());
            }

            const cellBg = isCorrect ? "#f0fff4" : "#fff5f5";
            const cellColor = isCorrect ? "#155724" : "#d32f2f";
            const icon = isCorrect ? "✅" : "❌";
            const displayVal = userAns === "" ? "<em>(trống)</em>" : `<strong>${userAns}</strong>`;

            rowBuffer += `<td style="border: 1px solid #ddd; padding: 8px; background-color: ${cellBg}; color: ${cellColor}; width: 25%;"><div style="font-size:11px; color:#666;">Q${item.qNum}</div><div>${displayVal} ${icon}</div></td>`;
            if ((index + 1) % 4 === 0) { html += `<tr>${rowBuffer}</tr>`; rowBuffer = ""; }
        });
        if (rowBuffer !== "") html += `<tr>${rowBuffer}</tr>`;
        html += `</table>`;
        return html;
    };

    const sendEmailReport = (score, total, type, detailedLog = "") => {
        const sName = localStorage.getItem("currentStudentName");
        const sId = localStorage.getItem("currentStudentId");
        const displayName = sName ? `${sName} (ID: ${sId})` : (sId || "Guest Candidate");

        const currentAnswers = answersRef.current;
        const currentTimeLeft = timeLeftRef.current;

        const timeTaken = formatTimeStr(initialTime - currentTimeLeft);
        const now = new Date().toLocaleString('vi-VN');
        let templateParams = {}; let templateId = "";

        if (type === 'lr') {
            templateId = EMAIL_TEMPLATE_LR;
            templateParams = { test_name: skill.toUpperCase(), student_name: displayName, score: score, total: total, time_taken: timeTaken, submission_time: now, detailed_answers: detailedLog };
        } else {
            templateId = EMAIL_TEMPLATE_WRITING;
            let overallText = "Chấm sau";
            if (aiResultTask1 && aiResultTask2) {
                const band1 = parseFloat(aiResultTask1.band || 0); const band2 = parseFloat(aiResultTask2.band || 0);
                overallText = ((band1 + band2 * 2) / 3).toFixed(1);
            } else if (aiResultTask1 || aiResultTask2) { overallText = (aiResultTask1?.band || aiResultTask2?.band) + " (Partial)"; }

            templateParams = {
                student_name: displayName,
                overall_score: overallText,
                time_taken: timeTaken,
                submission_time: now,
                task1_content: currentAnswers['writing_task1'] || "(No submission)",
                task1_feedback: generateWritingFeedbackHTML(aiResultTask1, 'task1'),
                task2_content: currentAnswers['writing_task2'] || "(No submission)",
                task2_feedback: generateWritingFeedbackHTML(aiResultTask2, 'task2')
            };
        }
        emailjs.send(EMAIL_SERVICE_ID, templateId, templateParams)
            .then(() => {
                console.log("Email sent!");
                localStorage.removeItem(`ielts_save_${testId}_${skill}`);
                localStorage.removeItem(`ielts_time_${testId}_${skill}`);
            })
            .catch((err) => {
                console.error("Email failed:", err);
                toast.error("❌ Lỗi mạng: Gửi email thất bại. Bài làm vẫn được lưu nháp trên trình duyệt.");
            });
    };

    const handleSubmitAuto = () => {
        if (skill === 'writing') {
            handleSubmitWriting();
        } else {
            handleSubmitLR();
        }
    }

    // 👉 THÊM ASYNC Ở ĐÂY
    const handleSubmitLR = async () => {
        let score = 0;
        const validQuestions = flatQuestions.filter(q => q.qNum);
        let total = validQuestions.length;

        validQuestions.forEach(item => {
            const u = (answersRef.current[item.qNum] || "").trim().toLowerCase();
            if (item.answer === undefined || item.answer === null) return;
            const c = Array.isArray(item.answer) ? item.answer : [item.answer];
            if (c.some(ans => ans && ans.toString().toLowerCase() === u)) score++;
        });

        const logHtml = generateDetailedLog(score);

        setIsSubmitted(true);
        setResultData({ score, total });
        setShowResult(true);
        
        // 👉 AWAIT ĐỂ CHỜ FIREBASE LƯU XONG MỚI GỬI EMAIL (tránh lỗi)
        await saveToHistory('mock_test', score, total);

        sendEmailReport(score, total, 'lr', logHtml);
        toast.success("🎉 Nộp bài thành công!");
    };

    // 👉 THÊM ASYNC Ở ĐÂY
    const handleSubmitWriting = async () => {
        setIsSubmitted(true); 
        setShowResult(true);

        let overallBand = "N/A";
        let t1Band = aiResultTask1 ? aiResultTask1.band : "N/A";
        let t2Band = aiResultTask2 ? aiResultTask2.band : "N/A";

        if (aiResultTask1 && aiResultTask2) {
            const b1 = parseFloat(aiResultTask1.band || 0);
            const b2 = parseFloat(aiResultTask2.band || 0);
            overallBand = ((b1 + b2 * 2) / 3).toFixed(1);
        } else if (aiResultTask1 || aiResultTask2) {
            overallBand = (aiResultTask1?.band || aiResultTask2?.band) + " (Partial)";
        }

        // 👉 AWAIT ĐỂ CHỜ FIREBASE LƯU XONG
        await saveToHistory('mock_test', `${overallBand}`, 0, { t1Band, t2Band });

        sendEmailReport(0, 0, 'writing');
        toast.success("📝 Bài Writing đã nộp.");
    };

    const handleRealSubmitFromModal = () => {
        setShowConfirmModal(false);
        skill === 'writing' ? handleSubmitWriting() : handleSubmitLR();
    };

    useEffect(() => {
        const handleContextMenu = (e) => {
            const targetArea = e.target.closest('.reading-left-pane, .reading-right-pane, .questions-area');
            if (!targetArea) return;

            e.preventDefault();
            const sel = window.getSelection();
            const range = sel.rangeCount > 0 ? sel.getRangeAt(0) : null;
            let type = 'none';
            const targetNote = e.target.closest('.note-attached');

            const highlightedElement = isInsideHighlight(e.target);

            if (targetNote) {
                type = 'note-context';
                currentNoteId.current = targetNote.id;
            }
            else if (range && !sel.isCollapsed && range.toString().trim().length > 0) {
                type = 'selection';
                savedRange.current = range.cloneRange();
            }
            else if (highlightedElement) {
                type = 'highlight-context';
                const newRange = document.createRange();
                newRange.selectNode(highlightedElement);
                savedRange.current = newRange;
            }
            else {
                setContextMenu({ visible: false, x: 0, y: 0, type: 'none' });
                return;
            }
            setContextMenu({ visible: true, x: e.clientX, y: e.clientY, type });
        };
        const handleClick = () => { if (contextMenu.visible) setContextMenu({ ...contextMenu, visible: false }); };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('click', handleClick);
        };
    }, [skill, contextMenu.visible]);

    const isInsideHighlight = (node) => {
        let current = node.nodeType === 3 ? node.parentNode : node;
        while (current && current !== document.body) {
            if (current.nodeType === 1) {
                const bgColor = window.getComputedStyle(current).backgroundColor;
                if (bgColor === 'rgb(255, 255, 0)' || bgColor === 'rgba(255, 255, 0, 1)' || bgColor === '#ffff00' || bgColor === 'yellow') {
                    return current;
                }
            }
            current = current.parentNode;
        }
        return null;
    };
    
    const doHighlight = () => { if (!savedRange.current) return; const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(savedRange.current); document.designMode = "on"; if (!document.execCommand("hiliteColor", false, "#ffff00")) document.execCommand("backColor", false, "#ffff00"); document.designMode = "off"; sel.removeAllRanges(); setContextMenu({ ...contextMenu, visible: false }); };
    const doClearHighlight = () => { if (!savedRange.current) return; const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(savedRange.current); document.designMode = "on"; if (!document.execCommand("hiliteColor", false, "transparent")) { document.execCommand("backColor", false, "transparent"); } document.designMode = "off"; sel.removeAllRanges(); setContextMenu({ ...contextMenu, visible: false }); };
    const doAddNote = () => { if (!savedRange.current) return; const noteId = 'note-' + Date.now(); const span = document.createElement('span'); span.className = 'note-attached'; span.id = noteId; try { savedRange.current.surroundContents(span); } catch (e) { toast.info("💡 Vui lòng chỉ chọn văn bản trong cùng một đoạn văn để thêm ghi chú."); return; } setNotes(prev => ({ ...prev, [noteId]: { content: '', isOpen: true, x: contextMenu.x, y: contextMenu.y } })); window.getSelection().removeAllRanges(); setContextMenu({ ...contextMenu, visible: false }); };
    const doDeleteNote = () => { if (!currentNoteId.current) return; const id = currentNoteId.current; const span = document.getElementById(id); if (span) { const parent = span.parentNode; while (span.firstChild) parent.insertBefore(span.firstChild, span); parent.removeChild(span); } const newNotes = { ...notes }; delete newNotes[id]; setNotes(newNotes); setContextMenu({ ...contextMenu, visible: false }); };
    const handleNoteInteraction = (e) => { const target = e.target.closest('.note-attached'); if (target) { const id = target.id; if (e.type === 'mouseover') { if (notes[id] && notes[id].content && !notes[id].isOpen) { setTooltip({ visible: true, content: notes[id].content, x: e.clientX, y: e.clientY }); } } else if (e.type === 'mouseout') { setTooltip(prev => ({ ...prev, visible: false })); } else if (e.type === 'click') { setNotes(prev => ({ ...prev, [id]: { ...prev[id], isOpen: true, x: e.clientX, y: e.clientY } })); setTooltip(prev => ({ ...prev, visible: false })); } } };

    const readingPassageRender = useMemo(() => {
        if (skill !== 'reading') return null;
        return <div className="reading-left-pane" onClick={handleNoteInteraction} onMouseOver={handleNoteInteraction} onMouseOut={handleNoteInteraction}>{renderHTML(testData.sections.reading.passage)}</div>;
    }, [skill, testData.sections.reading.passage]);

    if (showResult) {
        return (
            <div className="result-screen scrollable">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#002554' }}>Test Finished</h2>
                <h3 style={{ margin: '0 0 20px 0', color: '#666', fontWeight: 'normal' }}>Student ID: <strong>{getStudentId()}</strong></h3>

                {skill !== 'writing' && (
                    <>
                        <div className="result-score" style={{ fontSize: '4.5rem', color: '#28a745', marginBottom: '10px', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                            {resultData.score} <span style={{ fontSize: '2.5rem', color: '#ccc' }}>/ {resultData.total}</span>
                        </div>

                        <div className="detailed-result-container">
                            <h3 style={{ color: '#002554', margin: '0 0 20px 0', borderBottom: '2px solid #eee', paddingBottom: '15px' }}>
                                <i className="fa-solid fa-chart-pie"></i> Detailed Results
                            </h3>

                            <div className="result-grid">
                                {flatQuestions.filter(q => q.qNum).map((item) => {
                                    const userAns = (answers[item.qNum] || "").trim();
                                    let isCorrect = false;
                                    let correctDisplay = "";

                                    if (item.answer) {
                                        const correctArr = Array.isArray(item.answer) ? item.answer : [item.answer];
                                        isCorrect = correctArr.some(ans => ans && ans.toString().toLowerCase() === userAns.toLowerCase());
                                        correctDisplay = correctArr.join(" / ");
                                    }

                                    return (
                                        <div key={item.qNum} className={`result-item ${isCorrect ? 'correct' : 'wrong'}`}>
                                            <div className="result-item-header">
                                                <span>Question {item.qNum}</span>
                                                <span>{isCorrect ? '✅' : '❌'}</span>
                                            </div>
                                            <div className="result-item-ans" style={{ color: isCorrect ? '#155724' : '#d32f2f' }}>
                                                {userAns === "" ? <em style={{ color: '#999', fontWeight: 'normal' }}>(trống)</em> : userAns}
                                            </div>
                                            {!isCorrect && item.answer && (
                                                <div className="result-correct-ans">
                                                    <strong>Key:</strong> {correctDisplay}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                )}

                <button className="btn-home" style={{ margin: '30px auto' }} onClick={() => navigate(`/test-menu/${testId}`)}>
                    <i className="fa-solid fa-house"></i> Home
                </button>
            </div>
        );
    }

    return (
        <div className="test-page-layout">
            <ToastContainer position="top-right" autoClose={3000} theme="colored" style={{ zIndex: 999999 }} />

            {contextMenu.visible && (
                <div className="ctx-menu" style={{ top: contextMenu.y, left: contextMenu.x, display: 'block' }}>
                    {contextMenu.type === 'selection' && (<><div className="ctx-menu-item" onClick={doHighlight}><i className="fa-solid fa-highlighter" style={{ color: '#d4b106' }}></i> Highlight</div><div className="ctx-menu-item" onClick={doAddNote}><i className="fa-solid fa-sticky-note" style={{ color: '#f57c00' }}></i> Add Note</div></>)}
                    {contextMenu.type === 'highlight-context' && (<div className="ctx-menu-item" onClick={doClearHighlight}><i className="fa-solid fa-eraser" style={{ color: '#666' }}></i> Clear Highlight</div>)}
                    {contextMenu.type === 'note-context' && (<div className="ctx-menu-item" onClick={doDeleteNote} style={{ color: 'red' }}><i className="fa-solid fa-trash"></i> Delete Note</div>)}
                </div>
            )}
            {tooltip.visible && <div className="note-tooltip" style={{ display: 'block', top: tooltip.y + 15, left: tooltip.x + 15 }}>{tooltip.content}</div>}

            {Object.entries(notes).map(([id, note]) => (
                note.isOpen && (
                    <div key={id} className="note-popup" style={{ top: note.y, left: note.x, position: 'fixed', zIndex: 1000 }}>
                        <div className="note-header" onMouseDown={(e) => handleNoteDragStart(e, id)} style={{ cursor: 'grab', userSelect: 'none' }}>
                            <span>Note</span><span className="note-close" onMouseDown={(e) => e.stopPropagation()} onClick={() => setNotes(prev => ({ ...prev, [id]: { ...prev[id], isOpen: false } }))}>×</span>
                        </div>
                        <textarea className="note-textarea" placeholder="Type your note here..." value={note.content} onKeyDown={(e) => e.stopPropagation()} onChange={(e) => setNotes(prev => ({ ...prev, [id]: { ...prev[id], content: e.target.value } }))} />
                    </div>
                )
            ))}

            <div className="test-header">
                <div className="header-left"><img src="/images/logo.png" alt="Logo" className="test-logo" /></div>
                <div className="header-center"><div className="timer-box"><i className="fa-regular fa-clock"></i> {formatTime(timeLeft)}</div></div>
                <div className="header-right">
                    {skill === 'writing' && (
                        <button className="btn-ai-header" onClick={handleUnifiedGrading} disabled={isGrading}>
                            <i className="fa-solid fa-wand-magic-sparkles"></i> {isGrading ? ' Grading...' : ' AI Grade'}
                        </button>
                    )}
                    <button className="submit-btn" onClick={() => setShowConfirmModal(true)}>
                        {skill === 'writing' ? 'SUBMIT WRITING' : 'SUBMIT TEST'}
                    </button>
                </div>
            </div>

            <div className="test-main-content">
                {skill === 'listening' && (
                    <div className="listening-container">
                        <audio ref={audioRef} src={testData.sections.listening.audioSrc} style={{ display: 'none' }} />
                        <div className="questions-area" onClick={handleNoteInteraction} onMouseOver={handleNoteInteraction} onMouseOut={handleNoteInteraction}>
                            {renderHTML(testData.sections.listening.passage || "")}
                            {testData.sections.listening.questions.map((part, i) => (
                                <div key={i} className="question-part">
                                    <h3>{part.title}</h3>
                                    {part.instruction && <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '15px' }}>{renderHTML(part.instruction)}</p>}
                                    <div className="content-box">{part.htmlContent ? renderHTML(part.htmlContent) : renderStructuredQuestion(part)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {skill === 'reading' && (
                    <div className="reading-container">
                        {readingPassageRender}
                        <div className="reading-right-pane" onClick={handleNoteInteraction} onMouseOver={handleNoteInteraction} onMouseOut={handleNoteInteraction}>
                            {testData.sections.reading.questions.map((part, i) => (
                                <div key={i} className="question-part">
                                    <h3>{part.title}</h3>
                                    {part.instruction && <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '15px' }}>{renderHTML(part.instruction)}</p>}
                                    <div className="content-box">{part.htmlContent ? renderHTML(part.htmlContent) : renderStructuredQuestion(part)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {skill === 'writing' && (
                    <div className="writing-wrapper">
                        <div className="writing-tabs-bar">
                            <button className={`w-tab-btn ${activeWritingTask === 'task1' ? 'active' : ''}`} onClick={() => setActiveWritingTask('task1')}>Task 1</button>
                            <button className={`w-tab-btn ${activeWritingTask === 'task2' ? 'active' : ''}`} onClick={() => setActiveWritingTask('task2')}>Task 2</button>
                        </div>
                        <div className="writing-workspace">
                            <div className="w-left-pane">
                                <div className="w-header-part">
                                    <h2 style={{ color: '#002554', margin: '0 0 10px', fontSize: '1.4rem' }}>{activeWritingTask === 'task1' ? 'WRITING TASK 1' : 'WRITING TASK 2'}</h2>
                                    <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '20px' }}>You should spend about {activeWritingTask === 'task1' ? '20' : '40'} minutes on this task.</p>
                                </div>
                                <div className="prompt-box">
                                    {testData.sections.writing && testData.sections.writing[activeWritingTask] ? (
                                        <>{renderHTML((testData.sections.writing[activeWritingTask].prompt || testData.sections.writing[activeWritingTask].content || "").replace(/\n/g, '<br/>'))}
                                            {activeWritingTask === 'task1' && (
                                                <>
                                                    {testData.sections.writing.task1.images && testData.sections.writing.task1.images.length > 0 && (
                                                        testData.sections.writing.task1.images.map((imgUrl, index) => (
                                                            <img key={index} src={imgUrl} alt={`Task 1 Part ${index + 1}`} className="task-img" style={{ marginBottom: '15px' }} />
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

            {showConfirmModal && (
                <div className="confirm-overlay" onClick={() => setShowConfirmModal(false)}>
                    <div className="confirm-box" onClick={(e) => e.stopPropagation()}>
                        <h3 className="confirm-title">Nộp bài thi?</h3>
                        <p className="confirm-desc">
                            Bạn có chắc chắn muốn nộp bài không?<br />
                            {skill === 'writing' && <span style={{ fontSize: '0.9rem', color: '#d32f2f' }}>(Lưu ý: Nếu muốn có điểm chấm AI, hãy bấm nút "AI Grade" trước khi nộp)</span>}
                        </p>
                        <div className="confirm-actions">
                            <button className="btn-cancel" onClick={() => setShowConfirmModal(false)}>Hủy bỏ</button>
                            <button className="btn-confirm" onClick={handleRealSubmitFromModal}>Đồng ý Nộp</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}