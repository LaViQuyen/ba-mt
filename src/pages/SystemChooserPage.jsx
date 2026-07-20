// src/pages/SystemChooserPage.jsx
// Man hinh chon he thi (IELTS / SAT) hien ngay sau khi dang nhap.
// Kiem tra quyen (examSystem) truoc khi cho vao — hoc vien bi gioi han 1 he
// se thay thong bao khong duoc vao he con lai.
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchAllowedExamSystem, canAccessSystem } from '../utils/examSystem';

export default function SystemChooserPage() {
  const navigate = useNavigate();

  const handleChoose = async (target) => {
    const studentId = localStorage.getItem('currentStudentId');
    try {
      const examSystem = await fetchAllowedExamSystem(studentId);
      if (!canAccessSystem(examSystem, target)) {
        toast.error(`🚫 Tài khoản của bạn không có quyền truy cập hệ ${target === 'ielts' ? 'IELTS' : 'SAT'}.`, { autoClose: 5000 });
        return;
      }
      navigate(`/dashboard/${target}`);
    } catch (error) {
      toast.error("❌ Lỗi kiểm tra quyền truy cập: " + error.message);
    }
  };

  return (
    <div className="homepage-wrapper">
      <div className="hp-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh' }}>
        <div className="hp-title" style={{ textAlign: 'center', marginBottom: '36px', borderBottom: 'none' }}>
          <h1>CHỌN HỆ THI</h1>
          <p>Vui lòng chọn hệ thi bạn muốn luyện tập</p>
        </div>

        <div className="hp-grid" style={{ maxWidth: '680px', width: '100%' }}>
          <div className="hp-card" style={{ cursor: 'pointer', textAlign: 'center', alignItems: 'center', padding: '36px 24px' }} onClick={() => handleChoose('ielts')}>
            <i className="fa-solid fa-earth-asia" style={{ fontSize: '3rem', color: '#2B6830', marginBottom: '16px' }}></i>
            <h3 style={{ fontSize: '1.4rem' }}>IELTS</h3>
            <p className="hp-card-desc" style={{ textAlign: 'center' }}>Mock Test đầy đủ 3 kỹ năng (Listening, Reading, Writing) + thư viện Writing chuyên biệt.</p>
            <button className="btn-start" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>VÀO HỆ IELTS</button>
          </div>

          <div className="hp-card sat-card-accent" style={{ cursor: 'pointer', textAlign: 'center', alignItems: 'center', padding: '36px 24px' }} onClick={() => handleChoose('sat')}>
            <i className="fa-solid fa-graduation-cap" style={{ fontSize: '3rem', color: '#2B6830', marginBottom: '16px' }}></i>
            <h3 style={{ fontSize: '1.4rem' }}>SAT <span className="hp-tab-badge">Adaptive</span></h3>
            <p className="hp-card-desc" style={{ textAlign: 'center' }}>Bài thi SAT Adaptive Reading & Writing, 2 module rẽ nhánh theo kết quả.</p>
            <button className="btn-start" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>VÀO HỆ SAT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
