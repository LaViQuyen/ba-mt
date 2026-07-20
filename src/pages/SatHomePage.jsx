// src/pages/SatHomePage.jsx
// Tach rieng tu HomePage.jsx (truoc day la tab SAT chung 1 trang voi IELTS).
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ref, get, child } from "firebase/database";
import { db } from '../firebase';
import { toast } from 'react-toastify';
import { satTests } from '../data/sat';
import { fetchAllowedExamSystem, canAccessSystem } from '../utils/examSystem';

export default function SatHomePage() {
  const navigate = useNavigate();

  // 🔒 GÁC CỔNG HỆ THI: trang này chỉ dành cho hệ SAT — học viên chỉ được gán hệ IELTS
  // (hoặc vào thẳng URL /dashboard/sat) sẽ bị đẩy về màn chọn hệ kèm thông báo.
  useEffect(() => {
    const studentId = localStorage.getItem("currentStudentId");
    fetchAllowedExamSystem(studentId).then((examSystem) => {
      if (!canAccessSystem(examSystem, 'sat')) {
        toast.error("🚫 Tài khoản của bạn không có quyền truy cập hệ SAT.", { autoClose: 5000 });
        navigate('/dashboard', { replace: true });
      }
    }).catch((error) => console.error("Lỗi kiểm tra quyền hệ thi:", error));
  }, [navigate]);

  // 👉 GÁC CỔNG chung: kiểm tra khóa tài khoản rồi mới cho vào thi (giống HomePage.jsx)
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
  const handleStartSat = (e, satId) => checkLockThenGo(e, `/sat-test/${satId}`);

  return (
    <div className="homepage-wrapper">
      <div className="hp-container">

        {/* HEADER */}
        <div className="hp-header">
          <div className="hp-title">
            <h1>SAT PRACTICE TEST SYSTEM</h1>
          </div>
          <div className="hp-nav">
            <Link to="/dashboard/sat" className="hp-link active">SAT TEST</Link>
          </div>
        </div>

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

      </div>
    </div>
  );
}
