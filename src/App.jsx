// src/App.jsx
import { useState, useEffect, useRef } from 'react'; 
import { Routes, Route, Link, useNavigate, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';       
import FullTestPage from './pages/FullTestPage'; 
import LandingPage from './pages/LandingPage';   
import AdminPage from './pages/AdminPage'; 
import TestMenuPage from './pages/TestMenuPage';
import WritingLibraryPage from './pages/WritingLibraryPage';
import WritingTestPage from './pages/WritingTestPage';
import TestHistoryPage from './pages/TestHistoryPage'; 

import { db } from './firebase'; 
import { ref, get, child, update } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// 👉 SỬA LỖI BẤM 2 LẦN: Đưa ProtectedRoute ra NGOÀI hàm App()
const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) return <Navigate to="/" replace />;
  return children;
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isAdmin, setIsAdmin] = useState(false); 
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [modalView, setModalView] = useState('login'); 

  // State và Ref cho Dropdown Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [credentials, setCredentials] = useState({ studentId: '', password: '' });
  const [passForm, setPassForm] = useState({ studentId: '', oldPass: '', newPass: '', confirmPass: '' });
  const [studentName, setStudentName] = useState(''); 

  // LẮNG NGHE SỰ KIỆN CLICK RA NGOÀI
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // CẤU HÌNH BẢO MẬT
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.keyCode === 123 || e.key === 'F12') { e.preventDefault(); return false; }
      if (e.ctrlKey && e.shiftKey && (['I', 'J', 'C'].includes(e.key.toUpperCase()))) { e.preventDefault(); return false; }
      if (e.ctrlKey && e.key.toUpperCase() === 'U') { e.preventDefault(); return false; }
      if (e.ctrlKey && e.key.toUpperCase() === 'F') { e.preventDefault(); return false; }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleIdChange = (e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val) && val.length <= 8) {
      setCredentials({ ...credentials, studentId: val });
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { studentId, password } = credentials;
    if (studentId.length !== 8 && studentId !== 'admin') { toast.warning("⚠️ Mã học viên phải có đúng 8 chữ số!"); return; }
    if (password.length < 6) { toast.warning("⚠️ Mật khẩu phải có ít nhất 6 ký tự!"); return; }

    if (studentId === '15082022' && password === 'BAVNbavn$67896789#') {
       setIsLoggedIn(true); setIsAdmin(true); setStudentName("Quản Trị Viên"); 
       setShowLoginModal(false); toast.success("🔓 Đăng nhập Admin thành công!"); 
       navigate('/admin'); return;
    }

    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, `users/${studentId}`));
      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.password === password) {
           setIsLoggedIn(true); setIsAdmin(false); setStudentName(userData.fullName);
           localStorage.setItem("currentStudentName", userData.fullName);
           localStorage.setItem("currentStudentId", studentId);
           setShowLoginModal(false);
           toast.success(`🦄 Xin chào ${userData.fullName}! Chúc bạn thi tốt.`); 
           navigate('/dashboard'); 
        } else { toast.error("❌ Sai mật khẩu! Vui lòng thử lại."); }
      } else { toast.error("❌ Mã học viên không tồn tại!"); }
    } catch (error) { console.error(error); toast.error("❌ Lỗi kết nối Server: " + error.message); }
  };

  const handleChangePassSubmit = async (e) => {
    e.preventDefault();
    const { studentId, oldPass, newPass, confirmPass } = passForm;
    if (studentId.length !== 8) { toast.warning("⚠️ Vui lòng nhập đúng Mã học viên!"); return; }
    if (newPass.length < 6) { toast.warning("⚠️ Mật khẩu mới phải từ 6 ký tự!"); return; }
    if (newPass !== confirmPass) { toast.error("❌ Xác nhận mật khẩu không khớp!"); return; }

    try {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `users/${studentId}`));
        if (snapshot.exists()) {
            const userData = snapshot.val();
            if (userData.password === oldPass) {
                await update(ref(db, `users/${studentId}`), { password: newPass });
                toast.success("✅ Đổi mật khẩu thành công! Vui lòng đăng nhập lại.");
                setModalView('login');
                setCredentials({ studentId: studentId, password: '' });
                setPassForm({ studentId: '', oldPass: '', newPass: '', confirmPass: '' });
            } else { toast.error("❌ Mật khẩu cũ không đúng!"); }
        } else { toast.error("❌ Mã học viên không tồn tại!"); }
    } catch (error) { console.error(error); toast.error("❌ Lỗi hệ thống: " + error.message); }
  };

  const handleResetPassSubmit = async (e) => {
    e.preventDefault();
    const { studentId } = passForm;
    if (!studentId || studentId.length !== 8) { toast.warning("⚠️ Vui lòng nhập đúng Mã học viên (8 số)!"); return; }
    try {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `users/${studentId}`));
        if (snapshot.exists()) {
            await update(ref(db, `users/${studentId}`), { password: "BAVNbavn" });
            toast.success("✅ Khôi phục thành công! Mật khẩu mới là: BAVNbavn", { autoClose: 8000 });
            setModalView('login');
            setCredentials({ studentId: studentId, password: '' });
            setPassForm({ ...passForm, studentId: '' });
        } else { toast.error("❌ Mã học viên không tồn tại!"); }
    } catch (error) { console.error(error); toast.error("❌ Lỗi hệ thống: " + error.message); }
  };

  const handleLogout = () => {
    setIsMenuOpen(false); 
    setIsLoggedIn(false); setIsAdmin(false); setStudentName('');
    localStorage.removeItem("currentStudentId");
    localStorage.removeItem("currentStudentName");
    navigate('/'); 
  };

  const openModal = () => { setModalView('login'); setShowLoginModal(true); }

  const isTestingPage = location.pathname.startsWith('/do-test/') || location.pathname === '/writing-practice';

  return (
    <div className="app-container"> 
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      
      {!isTestingPage && (
        <nav className="main-navbar">
            <Link to="/" className="nav-center-logo">
                <img src="/images/logo.png" alt="BeableVN Logo" className="nav-logo-img"/>
            </Link>
            
            <div className="nav-right-text">
                {isLoggedIn ? (
                  <div style={{ position: 'relative', zIndex: 9999 }} ref={dropdownRef}>
                    <div 
                      onClick={() => setIsMenuOpen(!isMenuOpen)} 
                      style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', background: '#f1f5f9', padding: '6px 15px 6px 6px', borderRadius: '30px', border: '1px solid #e2e8f0', fontWeight: 'bold', color: '#002554', userSelect: 'none' }}
                    >
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#002554', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <i className="fa-solid fa-user"></i>
                      </div>
                      <span style={{ fontSize: '0.9rem' }}>Xin chào, <strong>{studentName}</strong></span> 
                      <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.8rem', transform: isMenuOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }}></i>
                    </div>

                    {isMenuOpen && (
                      <div style={{ position: 'absolute', top: '125%', right: 0, background: '#fff', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', borderRadius: '10px', overflow: 'hidden', minWidth: '220px', border: '1px solid #eee', textAlign: 'left' }}>
                        <div style={{ padding: '12px 15px', borderBottom: '1px solid #f1f5f9', color: '#64748b', fontSize: '0.85rem' }}>Tài khoản cá nhân</div>
                        <Link to="/history" onClick={() => setIsMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 15px', color: '#334155', textDecoration: 'none', fontSize: '0.95rem' }} onMouseOver={e => e.target.style.background = '#f8fafc'} onMouseOut={e => e.target.style.background = '#fff'}>
                            <i className="fa-solid fa-clock-rotate-left" style={{ color: '#002554' }}></i> Xem lịch sử bài làm
                        </Link>
                        <div onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 15px', color: '#dc2626', cursor: 'pointer', fontSize: '0.95rem', borderTop: '1px solid #f1f5f9' }} onMouseOver={e => e.target.style.background = '#fef2f2'} onMouseOut={e => e.target.style.background = '#fff'}>
                            <i className="fa-solid fa-arrow-right-from-bracket"></i> Thoát hệ thống
                        </div>
                      </div>
                    )}
                  </div>
                ) : null }
            </div>
        </nav>
      )}

      {/* --- MODAL LOGIN --- */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
           <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setShowLoginModal(false)}>×</button>
              {modalView === 'login' && (
                  <>
                    <h2 style={{color:'#002554', marginTop:0}}>ĐĂNG NHẬP</h2>
                    <p style={{color:'#666', fontSize:'14px'}}>Hệ thống thi thử IELTS Online</p>
                    <form onSubmit={handleLoginSubmit}>
                        <div style={{textAlign:'left', fontSize:'12px', fontWeight:'bold', marginTop:10, color:'#555'}}>MÃ HỌC VIÊN</div>
                        <input type="text" className="login-input" placeholder="Nhập 8 số ID..." value={credentials.studentId} onChange={handleIdChange} inputMode="numeric" />
                        <div style={{textAlign:'left', fontSize:'12px', fontWeight:'bold', marginTop:10, color:'#555'}}>MẬT KHẨU</div>
                        <input type="password" className="login-input" placeholder="Nhập mật khẩu..." value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})} />
                        <button type="submit" className="btn-submit-login">TRUY CẬP HỆ THỐNG</button>
                    </form>
                    <div style={{marginTop:'20px', fontSize:'13px', display:'flex', flexDirection:'column', gap:'8px'}}>
                        <span onClick={() => setModalView('change-pass')} className="link-switch-mode"><i className="fa-solid fa-key"></i> Đổi mật khẩu</span>
                        <span onClick={() => setModalView('reset-pass')} className="link-switch-mode" style={{color:'#d32f2f'}}><i className="fa-solid fa-life-ring"></i> Quên mật khẩu?</span>
                    </div>
                  </>
              )}
              {modalView === 'change-pass' && (
                  <>
                    <h3 style={{color:'#002554', marginTop:0}}>ĐỔI MẬT KHẨU</h3>
                    <p style={{color:'#666', fontSize:'13px', fontStyle:'italic'}}>Nhập thông tin xác thực để đổi mật khẩu mới</p>
                    <form onSubmit={handleChangePassSubmit}>
                        <div style={{textAlign:'left', fontSize:'12px', fontWeight:'bold', marginTop:10, color:'#555'}}>Mã Học Viên</div>
                        <input type="text" className="login-input" placeholder="Nhập 8 số ID..." value={passForm.studentId} onChange={(e) => {if(/^\d*$/.test(e.target.value) && e.target.value.length<=8) setPassForm({...passForm, studentId: e.target.value})}} />
                        <div style={{textAlign:'left', fontSize:'12px', fontWeight:'bold', marginTop:10, color:'#555'}}>Mật khẩu cũ</div>
                        <input type="password" className="login-input" placeholder="Nhập mật khẩu hiện tại..." value={passForm.oldPass} onChange={(e) => setPassForm({...passForm, oldPass: e.target.value})} />
                        <div style={{textAlign:'left', fontSize:'12px', fontWeight:'bold', marginTop:10, color:'#555'}}>Mật khẩu mới</div>
                        <input type="password" className="login-input" placeholder="Mật khẩu mới (min 6 ký tự)" value={passForm.newPass} onChange={(e) => setPassForm({...passForm, newPass: e.target.value})} />
                        <div style={{textAlign:'left', fontSize:'12px', fontWeight:'bold', marginTop:10, color:'#555'}}>Xác nhận mật khẩu</div>
                        <input type="password" className="login-input" placeholder="Nhập lại mật khẩu mới..." value={passForm.confirmPass} onChange={(e) => setPassForm({...passForm, confirmPass: e.target.value})} />
                        <button type="submit" className="btn-submit-login" style={{background:'#28a745'}}>LƯU MẬT KHẨU MỚI</button>
                    </form>
                    <div style={{marginTop:'15px', fontSize:'13px'}}>
                        <span onClick={() => setModalView('login')} className="link-switch-mode"><i className="fa-solid fa-arrow-left"></i> Quay lại Đăng nhập</span>
                    </div>
                  </>
              )}
              {modalView === 'reset-pass' && (
                  <>
                    <h3 style={{color:'#d32f2f', marginTop:0}}>KHÔI PHỤC MẬT KHẨU</h3>
                    <p style={{color:'#666', fontSize:'13px'}}>Nhập ID để reset mật khẩu về mặc định</p>
                    <form onSubmit={handleResetPassSubmit}>
                        <div style={{textAlign:'left', fontSize:'12px', fontWeight:'bold', marginTop:10, color:'#555'}}>Mã Học Viên</div>
                        <input type="text" className="login-input" placeholder="Nhập 8 số ID..." value={passForm.studentId} onChange={(e) => {if(/^\d*$/.test(e.target.value) && e.target.value.length<=8) setPassForm({...passForm, studentId: e.target.value})}} />
                        <button type="submit" className="btn-submit-login" style={{background:'#d32f2f'}}>XÁC NHẬN KHÔI PHỤC</button>
                    </form>
                    <div style={{marginTop:'20px', fontSize:'13px'}}>
                        <span onClick={() => setModalView('login')} className="link-switch-mode"><i className="fa-solid fa-arrow-left"></i> Quay lại Đăng nhập</span>
                    </div>
                  </>
              )}
           </div>
        </div>
      )}

      <div className="app-content">
        <Routes>
          <Route path="/" element={ !isLoggedIn ? <LandingPage onOpenLogin={openModal} /> : (isAdmin ? <Navigate to="/admin" /> : <Navigate to="/dashboard" />) } />         
          <Route path="/admin" element={<AdminPage />} />
          
          {/* CẬP NHẬT CÁCH SỬ DỤNG PROTECTED ROUTE Ở ĐÂY */}
          <Route path="/dashboard" element={<ProtectedRoute isLoggedIn={isLoggedIn}><HomePage /></ProtectedRoute>} />
          <Route path="/test-menu/:testId" element={<ProtectedRoute isLoggedIn={isLoggedIn}><TestMenuPage /></ProtectedRoute>} />
          <Route path="/do-test/:testId/:skill" element={<ProtectedRoute isLoggedIn={isLoggedIn}><FullTestPage /></ProtectedRoute>} />
          <Route path="/writing-library" element={<ProtectedRoute isLoggedIn={isLoggedIn}><WritingLibraryPage /></ProtectedRoute>} />
          <Route path="/writing-practice" element={<ProtectedRoute isLoggedIn={isLoggedIn}><WritingTestPage /></ProtectedRoute>} />
          <Route path="/history" element={<ProtectedRoute isLoggedIn={isLoggedIn}><TestHistoryPage /></ProtectedRoute>} />
        </Routes>
      </div>

      {!isTestingPage && (
        <footer className="main-footer">
          ©2026 by Be Able VN
        </footer>
      )}
    </div>
  );
}

export default App;