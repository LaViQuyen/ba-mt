// src/pages/WritingTestPage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { task1Library, task2Library } from '../data/writing_library';
import { GoogleGenerativeAI } from "@google/generative-ai";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import parse from 'html-react-parser';

// --- CẤU HÌNH ---
const API_KEY_GEMINI = import.meta.env.VITE_GEMINI_API_KEY;
const EMAIL_SERVICE_ID = "service_gvlyalu"; 
const EMAIL_TEMPLATE_ID = "template_h4voh6v"; 
const EMAIL_PUBLIC_KEY = "Tq7e72DxJoSIlhIU4"; 

export default function WritingTestPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // 1. LẤY THAM SỐ
  const t1Id = searchParams.get('t1');
  const t2Id = searchParams.get('t2');
  const mode = searchParams.get('mode'); 

  // 2. STATE
  const [activeTask, setActiveTask] = useState(mode === 'task2' ? 'task2' : 'task1');
  const [task1Data, setTask1Data] = useState(null);
  const [task2Data, setTask2Data] = useState(null);
  const [answers, setAnswers] = useState({ task1: "", task2: "" });
  
  // Thời gian
  const initialTime = useMemo(() => {
      if (mode === 'task1') return 20 * 60;
      if (mode === 'task2') return 40 * 60;
      return 60 * 60; 
  }, [mode]);
  
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isTestStarted, setIsTestStarted] = useState(true); 
  const [studentId, setStudentId] = useState("");

  // Logic xử lý
  const [isGrading, setIsGrading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  
  const [aiResultTask1, setAiResultTask1] = useState(null);
  const [aiResultTask2, setAiResultTask2] = useState(null);

  // 3. LOAD DATA
  useEffect(() => {
    const storedId = localStorage.getItem("currentStudentId");
    setStudentId(storedId || "Guest");
    emailjs.init(EMAIL_PUBLIC_KEY);
    
    if (t1Id) setTask1Data(task1Library.find(t => t.id === t1Id));
    if (t2Id) setTask2Data(task2Library.find(t => t.id === t2Id));
    
    toast.info("⏱️ Thời gian làm bài đã bắt đầu!");
  }, [t1Id, t2Id]);

  // 4. TIMER
  useEffect(() => {
    let timer = null;
    if (isTestStarted && timeLeft > 0) {
        timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    handleRealSubmit(); 
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTestStarted, timeLeft]);

  // HELPER FUNCTIONS
  const formatTime = (seconds) => {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      return `${h > 0 ? h + ':' : ''}${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  };

  const renderHTML = (text) => parse((text || "").replace(/\n/g, '<br/>'));

  // --- AI GRADING ---
  const gradeSingleTask = async (taskKey, essayContent, promptText) => {
      const taskCriterion = taskKey === 'task1' ? "TA" : "TR";
      const prompt = `You are an austere IELTS Examiner. 
      Task: ${taskKey === 'task1' ? 'Writing Task 1' : 'Writing Task 2'}. 
      Question: "${promptText}". 
      Student Essay: "${essayContent}". 
      Please grade strict JSON format: 
      { "band": 0.0, "comment": "summary", "criteria": { "${taskCriterion}": { "score": 0, "text": "..." }, "CC": { "score": 0, "text": "..." }, "LR": { "score": 0, "text": "..." }, "GRA": { "score": 0, "text": "..." } } }`;

      try {
          const genAI = new GoogleGenerativeAI(API_KEY_GEMINI);
          const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
          const result = await model.generateContent(prompt);
          const jsonStr = result.response.text().replace(/```json/g, '').replace(/```/g, '').trim();
          const match = jsonStr.match(/\{[\s\S]*\}/);
          
          if (match) {
              const scoreData = JSON.parse(match[0]);
              if (taskKey === 'task1' && scoreData.criteria.TR) { scoreData.criteria.TA = scoreData.criteria.TR; delete scoreData.criteria.TR; } 
              if (taskKey === 'task2' && scoreData.criteria.TA) { scoreData.criteria.TR = scoreData.criteria.TA; delete scoreData.criteria.TA; } 
              return scoreData;
          }
      } catch (e) { console.error("AI Error", e); return null; }
      return null;
  };

  const handleAiGrade = async () => {
      const t1 = answers.task1;
      const t2 = answers.task2;
      const hasT1 = task1Data && t1.length > 20;
      const hasT2 = task2Data && t2.length > 20;

      if (!hasT1 && !hasT2) { toast.warning("⚠️ Bài làm quá ngắn để chấm điểm."); return; }
      setIsGrading(true); toast.info("🤖 AI đang chấm bài...");

      const promises = [];
      if (hasT1) promises.push(gradeSingleTask('task1', t1, task1Data.title).then(setAiResultTask1));
      if (hasT2) promises.push(gradeSingleTask('task2', t2, task2Data.question).then(setAiResultTask2));

      await Promise.all(promises);
      setIsGrading(false);
      toast.success("✅ Đã có kết quả chấm!");
  };

  // --- SUBMIT ---
  const generateWritingFeedbackHTML = (aiResult, taskType) => {
      if (!aiResult || !aiResult.criteria) return "<em>Chưa chấm điểm AI.</em>";
      const { criteria, band } = aiResult;
      let html = `<table style="width:100%; border-collapse: collapse; font-family: monospace; font-size: 13px;">`;
      const keysOrder = taskType === 'task1' ? ['TA', 'CC', 'LR', 'GRA'] : ['TR', 'CC', 'LR', 'GRA'];
      keysOrder.forEach(key => {
          const item = criteria[key];
          if(item) html += `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px; color: #002554; font-weight: bold; width: 60px;">${key}</td><td style="padding: 8px; color: #333;">${item.text || item.comment}</td><td style="padding: 8px; text-align: right;"><span style="background: #002554; color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold;">${item.score}</span></td></tr>`;
      });
      html += `<tr><td colspan="3" style="padding: 10px; text-align: right; background-color: #e8f5e9; color: #2e7d32; font-weight: bold; border-top: 2px solid #ddd;">BAND SCORE: ${band}</td></tr></table>`;
      return html;
  };

  const handlePreSubmit = () => {
      setShowConfirmModal(true);
  };

  const handleRealSubmit = () => {
      setShowConfirmModal(false);
      setIsSubmitting(true);

      let overallText = "N/A";
      if (aiResultTask1 && aiResultTask2) {
          const b1 = parseFloat(aiResultTask1.band);
          const b2 = parseFloat(aiResultTask2.band);
          overallText = ((b1 + b2 * 2) / 3).toFixed(1);
      } else if (aiResultTask1) overallText = aiResultTask1.band;
      else if (aiResultTask2) overallText = aiResultTask2.band;

      const m = Math.floor((initialTime - timeLeft) / 60);
      const s = (initialTime - timeLeft) % 60;

      const templateParams = {
          student_name: studentId,
          overall_score: overallText,
          time_taken: `${m}m ${s}s`,
          submission_time: new Date().toLocaleString('vi-VN'),
          task1_content: answers.task1 || "(No submission)",
          task1_feedback: generateWritingFeedbackHTML(aiResultTask1, 'task1'),
          task2_content: answers.task2 || "(No submission)",
          task2_feedback: generateWritingFeedbackHTML(aiResultTask2, 'task2')
      };

      emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams)
          .then(() => {
              toast.success("🎉 Nộp bài thành công!");
              navigate('/writing-library');
          })
          .catch(() => {
              toast.error("❌ Gửi thất bại.");
              setIsSubmitting(false);
          });
  };

  return (
    <div className="test-page-layout">
        <ToastContainer position="top-right" autoClose={3000} />

        {/* HEADER */}
        <div className="test-header">
            <div className="header-left">
                <img src="/images/logo.png" alt="Logo" className="test-logo" />
            </div>
            <div className="header-center">
                <div className="timer-box">
                    <i className="fa-regular fa-clock"></i> {formatTime(timeLeft)}
                </div>
            </div>
            <div className="header-right">
                <button className="btn-ai-header" onClick={handleAiGrade} disabled={isGrading || isSubmitting}>
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                    {isGrading ? ' Grading...' : ' AI Grade'}
                </button>
                <button className="submit-btn" onClick={handlePreSubmit} disabled={isSubmitting}>
                    SUBMIT WRITING
                </button>
            </div>
        </div>

        {/* BODY */}
        <div className="test-main-content" style={{flex:1, display:'flex', flexDirection:'column', overflow:'hidden'}}>
            <div className="writing-wrapper">
                <div className="writing-tabs-bar">
                    {task1Data && <button className={`w-tab-btn ${activeTask === 'task1' ? 'active' : ''}`} onClick={() => setActiveTask('task1')}>Task 1</button>}
                    {task2Data && <button className={`w-tab-btn ${activeTask === 'task2' ? 'active' : ''}`} onClick={() => setActiveTask('task2')}>Task 2</button>}
                </div>

                <div className="writing-workspace" style={{position:'relative'}}>
                    <div className="w-left-pane">
                        <div className="w-header-part">
                            <h2>{activeTask === 'task1' ? 'WRITING TASK 1' : 'WRITING TASK 2'}</h2>
                            <p>You should spend about {activeTask === 'task1' ? '20' : '40'} minutes on this task.</p>
                        </div>
                        
                        <div className="prompt-box">
                            {activeTask === 'task1' && task1Data ? (
                                <>
                                    {/* 🔥 TASK 1 FIX: VĂN BẢN TRƯỚC, HÌNH ẢNH SAU */}
                                    <div style={{marginBottom: '20px'}}>
                                        {renderHTML((task1Data.title || task1Data.prompt || "").replace(/\n/g, '<br/>'))}
                                    </div>

                                    {/* Hỗ trợ hiển thị nhiều ảnh */}
                                    {task1Data.images && task1Data.images.length > 0 && (
                                        task1Data.images.map((img, i) => (
                                            <img key={i} src={img} className="task-img" style={{marginBottom: '15px'}} alt={`Task 1 Part ${i+1}`} />
                                        ))
                                    )}
                                    {/* Hỗ trợ hiển thị 1 ảnh */}
                                    {task1Data.image && !task1Data.images && (
                                        <img src={task1Data.image} className="task-img" alt="Task 1" />
                                    )}
                                </>
                            ) : activeTask === 'task2' && task2Data ? (
                                <>
                                    {/* 🔥 TASK 2 FIX: GIAO DIỆN CHUẨN ĐỀ THI */}                                   
                                    <div style={{fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '20px'}}>
                                        {renderHTML((task2Data.question || task2Data.prompt || "").replace(/\n/g, '<br/>'))}
                                    </div>                                  
                                    {task2Data.instruction && (
                                        <p style={{fontStyle: 'italic', color: '#555', borderLeft: '3px solid #ccc', paddingLeft: '10px'}}>
                                            {task2Data.instruction}
                                        </p>
                                    )}
                                </>
                            ) : (<p>Loading...</p>)}
                        </div>
                    </div>

                    <div className="w-right-pane">
                        <textarea 
                            className="writing-textarea" 
                            placeholder={`Type your ${activeTask === 'task1' ? 'Task 1' : 'Task 2'} answer here...`}
                            value={answers[activeTask]}
                            onChange={(e) => setAnswers({...answers, [activeTask]: e.target.value})}
                        />
                        <div className="meta-row">
                            Word Count: <strong>{(answers[activeTask] || "").split(/\s+/).filter(w => w.length > 0).length}</strong>
                        </div>

                        {(activeTask === 'task1' ? aiResultTask1 : aiResultTask2) && (
                            <div className="grading-box">
                                {(() => {
                                    const res = activeTask === 'task1' ? aiResultTask1 : aiResultTask2;
                                    const criteria = res.criteria;
                                    const keysOrder = activeTask === 'task1' ? ['TA', 'CC', 'LR', 'GRA'] : ['TR', 'CC', 'LR', 'GRA'];
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
        </div>

        {/* CONFIRM MODAL */}
        {showConfirmModal && (
            <div className="confirm-overlay" onClick={() => setShowConfirmModal(false)}>
                <div className="confirm-box" onClick={(e) => e.stopPropagation()}>
                    <h3 className="confirm-title">Nộp bài thi?</h3>
                    <p className="confirm-desc">
                        Bạn có chắc chắn muốn nộp bài không?<br/>
                        <span style={{fontSize:'0.9rem', color:'#d32f2f'}}>
                            (Lưu ý: Nếu muốn có điểm chấm AI, hãy bấm nút "AI Grade" trước khi nộp)
                        </span>
                    </p>
                    <div className="confirm-actions">
                        <button className="btn-cancel" onClick={() => setShowConfirmModal(false)}>Hủy bỏ</button>
                        <button className="btn-confirm" onClick={handleRealSubmit}>Đồng ý Nộp</button>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}