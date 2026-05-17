// src/pages/TestHistoryPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/vi';

// Nhúng Firebase
import { ref, get, child, remove } from "firebase/database";
import { db } from '../firebase';

dayjs.extend(relativeTime);
dayjs.locale('vi');

export default function TestHistoryPage() {
    const navigate = useNavigate();
    const [history, setHistory] = useState([]);
    const [activeTab, setActiveTab] = useState('mock_test'); 
    
    const currentStudentId = localStorage.getItem("currentStudentId") || "Guest";

    // 👉 TẢI VÀ GỘP DỮ LIỆU TỪ CẢ FIREBASE LẪN LOCALSTORAGE
    useEffect(() => {
        const fetchHistory = async () => {
            // Luôn lấy dữ liệu dự phòng từ máy (trường hợp rớt mạng)
            const savedHistory = JSON.parse(localStorage.getItem("ielts_history") || "[]");
            const localHistory = savedHistory.filter(record => record.studentId === currentStudentId);

            if (currentStudentId === "Guest") {
                localHistory.sort((a, b) => b.id - a.id); 
                setHistory(localHistory);
            } else {
                try {
                    const dbRef = ref(db);
                    const snapshot = await get(child(dbRef, `history/${currentStudentId}`));
                    
                    let firebaseArray = [];
                    if (snapshot.exists()) {
                        firebaseArray = Object.values(snapshot.val());
                    }

                    // 👉 GỘP DỮ LIỆU: Ưu tiên Firebase, thêm các bài kẹt ở Local mà Firebase chưa có
                    const mergedHistory = [...firebaseArray];
                    localHistory.forEach(localItem => {
                        if (!mergedHistory.find(m => m.id === localItem.id)) {
                            mergedHistory.push(localItem);
                        }
                    });

                    mergedHistory.sort((a, b) => b.id - a.id); 
                    setHistory(mergedHistory);
                } catch (error) {
                    console.error("Lỗi tải từ Firebase, dùng dữ liệu trên máy:", error);
                    localHistory.sort((a, b) => b.id - a.id); 
                    setHistory(localHistory);
                }
            }
        };
        fetchHistory();
    }, [currentStudentId]);

    const clearHistory = async () => {
        if(window.confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử làm bài của mình?")) {
            // 1. Xóa trên LocalStorage
            const allHistory = JSON.parse(localStorage.getItem("ielts_history") || "[]");
            const remainingHistory = allHistory.filter(record => record.studentId !== currentStudentId);
            localStorage.setItem("ielts_history", JSON.stringify(remainingHistory));
            
            // 2. Xóa trên Firebase (nếu đã đăng nhập)
            if (currentStudentId !== "Guest") {
                try {
                    await remove(ref(db, `history/${currentStudentId}`));
                } catch (error) {
                    console.error("Lỗi xóa Firebase:", error);
                }
            }
            setHistory([]);
        }
    };

    const displayedHistory = history.filter(item => item.type === activeTab);

    const renderWritingSubScores = (record) => {
        if (!record.t1Band && !record.t2Band) return null; 
        
        const badgeStyleT1 = { background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe', padding: '3px 8px', borderRadius: '6px', fontWeight: '800', fontSize: '0.85rem' };
        const badgeStyleT2 = { background: '#faf5ff', color: '#6d28d9', border: '1px solid #e9d5ff', padding: '3px 8px', borderRadius: '6px', fontWeight: '800', fontSize: '0.85rem' };

        if (record.skill === 'TASK 1') return <div style={{ marginTop: '8px' }}><span style={badgeStyleT1}>T1: {record.t1Band || 'N/A'}</span></div>;
        if (record.skill === 'TASK 2') return <div style={{ marginTop: '8px' }}><span style={badgeStyleT2}>T2: {record.t2Band || 'N/A'}</span></div>;
        
        return (
            <div style={{ marginTop: '8px', display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                <span style={badgeStyleT1}>T1: {record.t1Band || 'N/A'}</span>
                <span style={badgeStyleT2}>T2: {record.t2Band || 'N/A'}</span>
            </div>
        );
    };

    return (
        <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1 style={{ color: '#002554', margin: 0 }}>
                    <i className="fa-solid fa-clock-rotate-left" style={{ marginRight: '10px' }}></i> Lịch Sử Làm Bài
                </h1>
                <button onClick={() => navigate(-1)} style={{ padding: '10px 20px', background: '#f1f5f9', color: '#002554', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                    <i className="fa-solid fa-arrow-left"></i> Quay lại
                </button>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '2px solid #eee' }}>
                <button onClick={() => setActiveTab('mock_test')} style={{ padding: '12px 25px', background: 'none', border: 'none', borderBottom: activeTab === 'mock_test' ? '3px solid #002554' : '3px solid transparent', color: activeTab === 'mock_test' ? '#002554' : '#666', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: '0.2s' }}>
                    <i className="fa-solid fa-headphones"></i> Mock Test
                </button>
                <button onClick={() => setActiveTab('writing')} style={{ padding: '12px 25px', background: 'none', border: 'none', borderBottom: activeTab === 'writing' ? '3px solid #002554' : '3px solid transparent', color: activeTab === 'writing' ? '#002554' : '#666', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: '0.2s' }}>
                    <i className="fa-solid fa-pen-nib"></i> Writing Test
                </button>
            </div>

            <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                {displayedHistory.length === 0 ? (
                    <div style={{ padding: '60px 20px', textAlign: 'center', color: '#888' }}>
                        <i className="fa-regular fa-folder-open" style={{ fontSize: '4rem', marginBottom: '15px', color: '#e2e8f0' }}></i>
                        <h3 style={{ margin: '0 0 10px 0', color: '#334155' }}>Chưa có dữ liệu</h3>
                        <p style={{ margin: 0 }}>Bạn chưa hoàn thành bài thi nào ở mục này.</p>
                    </div>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <tr>
                                    <th style={{ padding: '18px 20px', color: '#475569' }}>Thời gian</th>
                                    <th style={{ padding: '18px 20px', color: '#475569' }}>Tên Bài Thi</th>
                                    <th style={{ padding: '18px 20px', color: '#475569' }}>Kỹ Năng</th>
                                    <th style={{ padding: '18px 20px', color: '#475569', textAlign: 'right' }}>Kết quả</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayedHistory.map((record) => {
                                    const isWritingRecord = record.type === 'writing' || record.skill === 'WRITING';

                                    return (
                                        <tr key={record.id} style={{ borderBottom: '1px solid #f1f5f9', transition: '0.2s' }}>
                                            <td style={{ padding: '18px 20px', color: '#64748b' }}>
                                                <div style={{ fontWeight: 'bold', color: '#334155' }}>{dayjs(record.date).fromNow()}</div>
                                                <div style={{ fontSize: '0.85rem' }}>{dayjs(record.date).format('DD/MM/YYYY HH:mm')}</div>
                                            </td>
                                            <td style={{ padding: '18px 20px', fontWeight: 'bold', color: '#0f172a' }}>{record.testName}</td>
                                            <td style={{ padding: '18px 20px' }}>
                                                <span style={{ background: isWritingRecord ? '#f0fdf4' : '#eff6ff', color: isWritingRecord ? '#166534' : '#1d4ed8', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                                                    {record.skill}
                                                </span>
                                            </td>
                                            <td style={{ padding: '18px 20px', textAlign: 'right', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                                {isWritingRecord ? (
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', lineHeight: '1.3' }}>
                                                        <span style={{ color: '#dc2626' }}>Band: {record.band?.replace('Band: ', '')}</span>
                                                        {renderWritingSubScores(record)}
                                                    </div>
                                                ) : (
                                                    <span style={{ color: '#16a34a' }}>{record.score} <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>/ {record.total}</span></span>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {history.length > 0 && (
                <div style={{ textAlign: 'right', marginTop: '20px' }}>
                    <button onClick={clearHistory} style={{ padding: '10px 15px', background: '#fff', color: '#dc2626', border: '1px solid #dc2626', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                        <i className="fa-solid fa-trash"></i> Xóa Lịch Sử
                    </button>
                </div>
            )}
        </div>
    );
}