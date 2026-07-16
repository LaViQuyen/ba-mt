// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// 👉 1. IMPORT CÁC HÀM CỦA FIREBASE
import { ref, get, child } from "firebase/database";
import { db } from '../firebase';
import { toast } from 'react-toastify';
import { satTests } from '../data/sat'; // Danh muc de SAT Adaptive (metadata nhe, data nap khi vao thi)

export default function HomePage() {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  // 👉 TAB IELTS / SAT: tach 2 he de thi thanh 2 tab rieng cho gon giao dien.
  //    Ghi nho tab dang chon vao localStorage de lan sau mo lai dung tab cu.
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem('exam_home_tab') || 'ielts');
  const switchTab = (tab) => {
    setActiveTab(tab);
    try { localStorage.setItem('exam_home_tab', tab); } catch (e) { console.error(e); }
  };

  // 👉 GỌI DỮ LIỆU IELTS TỪ FIREBASE KHI TRANG VỪA MỞ LÊN
  useEffect(() => {
    const fetchTests = async () => {
      try {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, 'mockTests'));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const testsArray = Object.values(data);
          // 🔥 LỌC BẢO MẬT: Chỉ lấy những đề đã được duyệt (published)
          let publishedTests = testsArray.filter(test => test.status === 'published');
          // 🌟 SẮP XẾP TỰ NHIÊN (NATURAL SORT)
          publishedTests.sort((a, b) => a.testName.localeCompare(b.testName, undefined, { numeric: true }));
          setTests(publishedTests);
        } else {
          setTests([]);
        }
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
        toast.error("Không thể kết nối tải danh sách đề thi.");
      } finally {
        setLoading(false);
      }
    };
    fetchTests();
  }, []);

  // 👉 GÁC CỔNG chung: kiểm tra khóa tài khoản rồi mới cho vào thi
  const checkLockThenGo = async (e, path) => {
    e.preventDefault();
    const studentId = localStorage.getItem("currentStudentId");
    if (!studentId || studentId === 'Guest') { navigate(path); return; }
    try {
      const dbRef = ref(db);
      const snap = await get(child(dbRef, `users/${studentId}`));
      if (snap.exists() && snap.val().isLocked) {
        toast.error("🔒 TÀI KHOẢN BỊ KHÓA: Bạn không thể làm đề thi lúc này. Vui lòng liên hệ Admin!", { autoClose: 5000 });
      } else {
        navigate(path);
      }
    } catch (error) {
      toast.error("❌ Lỗi kiểm tra tài khoản: " + error.message);
    }
  };
  const handleStartTest = (e, testId) => checkLockThenGo(e, `/test-menu/${testId}`);
  const handleStartSat = (e, satId) => checkLockThenGo(e, `/sat-test/${satId}`);

  return (
    <div className="homepage-wrapper">
      <div className="hp-container">

        {/* HEADER */}
        <div className="hp-header">
          <div className="hp-title">
            <h1>{activeTab === 'sat' ? 'SAT PRACTICE TEST SYSTEM' : 'IELTS PRACTICE TEST SYSTEM'}</h1>
          </div>
          <div className="hp-nav">
            <Link to="/dashboard" className="hp-link active">MOCK TEST</Link>
            <Link to="/writing-library" className="hp-link">WRITING</Link>
          </div>
        </div>

        {/* 👉 TAB BAR: IELTS | SAT */}
        <div className="hp-tab-bar">
          <button className={`hp-tab ${activeTab === 'ielts' ? 'active' : ''}`} onClick={() => switchTab('ielts')}>
            <i className="fa-solid fa-earth-asia"></i> IELTS
          </button>
          <button className={`hp-tab ${activeTab === 'sat' ? 'active' : ''}`} onClick={() => switchTab('sat')}>
            <i className="fa-solid fa-graduation-cap"></i> SAT <span className="hp-tab-badge">Adaptive</span>
          </button>
        </div>

        {/* ===== TAB IELTS ===== */}
        {activeTab === 'ielts' && (
          loading ? (
            <div style={{ textAlign: 'center', padding: '50px', color: '#2B6830' }}>
              <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '2.5rem', marginBottom: '15px' }}></i>
              <h3 style={{ margin: 0 }}>Đang kết nối hệ thống...</h3>
              <p style={{ color: '#666' }}>Vui lòng chờ trong giây lát</p>
            </div>
          ) : (
            <div className="hp-grid">
              {tests.length > 0 ? (
                tests.map(test => (
                  <div key={test.id} className="hp-card">
                    <h3>{test.testName}</h3>
                    <p className="hp-card-desc">{test.description}</p>
                    <button
                      className="btn-start"
                      onClick={(e) => handleStartTest(e, test.id)}
                      style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                    >
                      START TEST
                    </button>
                  </div>
                ))
              ) : (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px', background: 'white', borderRadius: '12px', border: '1px dashed #ccc' }}>
                  <i className="fa-regular fa-folder-open" style={{ fontSize: '3rem', color: '#ccc', marginBottom: '15px' }}></i>
                  <h3 style={{ margin: '0 0 10px 0', color: '#555' }}>Chưa có đề thi nào</h3>
                  <p style={{ color: '#888' }}>Hiện tại chưa có bài thi nào được xuất bản trên hệ thống.</p>
                </div>
              )}
            </div>
          )
        )}

        {/* ===== TAB SAT ===== */}
        {activeTab === 'sat' && (
          <>
            <div className="sat-tab-note">
              <i className="fa-solid fa-circle-info"></i>&nbsp;
              Đề SAT chạy theo cơ chế <b>Adaptive</b>: 2 module Reading & Writing, mỗi module 27 câu / 32 phút.
              Kết quả Module 1 quyết định độ khó và trần điểm của Module 2.
            </div>
            <div className="hp-grid">
              {satTests.length > 0 ? (
                satTests.map(t => (
                  <div key={t.id} className="hp-card sat-card-accent">
                    <h3>{t.testName}</h3>
                    <p className="hp-card-desc">{t.description}</p>
                    <button
                      className="btn-start"
                      onClick={(e) => handleStartSat(e, t.id)}
                      style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                    >
                      START SAT TEST
                    </button>
                  </div>
                ))
              ) : (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px', background: 'white', borderRadius: '12px', border: '1px dashed #ccc' }}>
                  <i className="fa-regular fa-folder-open" style={{ fontSize: '3rem', color: '#ccc', marginBottom: '15px' }}></i>
                  <h3 style={{ margin: '0 0 10px 0', color: '#555' }}>Chưa có đề SAT nào</h3>
                  <p style={{ color: '#888' }}>Đề SAT Adaptive sẽ xuất hiện tại đây khi được phát hành.</p>
                </div>
              )}
            </div>
          </>
        )}

      </div>
    </div>
  );
}
