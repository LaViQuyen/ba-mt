// src/App.jsx
import { useState, useEffect } from 'react'; 
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';       
import FullTestPage from './pages/FullTestPage'; 
import LandingPage from './pages/LandingPage';   
import AdminPage from './pages/AdminPage'; 
import TestMenuPage from './pages/TestMenuPage';
import WritingLibraryPage from './pages/WritingLibraryPage';
import WritingTestPage from './pages/WritingTestPage';
import { db } from './firebase'; 
import { ref, get, child, update } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isAdmin, setIsAdmin] = useState(false); 
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  // 🔥 State modalView bây giờ có 3 giá trị: 'login', 'change-pass', 'reset-pass'
  const [modalView, setModalView] = useState('login'); 

  const [credentials, setCredentials] = useState({ studentId: '', password: '' });
  const [passForm, setPassForm] = useState({ studentId: '', oldPass: '', newPass: '', confirmPass: '' });
  const [studentName, setStudentName] = useState(''); 

  // ... (Giữ nguyên useEffect chặn chuột phải/F12) ...
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.keyCode === 123) { e.preventDefault(); return false; }
      if (e.ctrlKey && e.shiftKey && (['I', 'J', 'C'].includes(e.key.toUpperCase()) || [73, 74, 67].includes(e.keyCode))) { e.preventDefault(); return false; }
      if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) { e.preventDefault(); return false; }
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

  // --- 1. XỬ LÝ ĐĂNG NHẬP ---
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { studentId, password } = credentials;

    if (studentId.length !== 8 && studentId !== 'admin') {
      toast.warning("⚠️ Mã học viên phải có đúng 8 chữ số!"); return;
    }
    if (password.length < 6) {
      toast.warning("⚠️ Mật khẩu phải có ít nhất 6 ký tự!"); return;
    }

    if (studentId === '12345678' && password === 'admin123') {
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
           localStorage.setItem("currentStudentId", studentId);
           setShowLoginModal(false);
           toast.success(`🦄 Xin chào ${userData.fullName}! Chúc bạn thi tốt.`); 
           navigate('/dashboard'); 
        } else {
           toast.error("❌ Sai mật khẩu! Vui lòng thử lại."); 
        }
      } else {
        toast.error("❌ Mã học viên không tồn tại!"); 
      }
    } catch (error) {
      console.error(error); toast.error("❌ Lỗi kết nối Server: " + error.message);
    }
  };

  // --- 2. XỬ LÝ ĐỔI MẬT KHẨU ---
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
            } else {
                toast.error("❌ Mật khẩu cũ không đúng!");
            }
        } else {
            toast.error("❌ Mã học viên không tồn tại!");
        }
    } catch (error) {
        console.error(error); toast.error("❌ Lỗi hệ thống: " + error.message);
    }
  };

  // 🔥 3. XỬ LÝ QUÊN MẬT KHẨU (RESET PASSWORD) ---
  const handleResetPassSubmit = async (e) => {
    e.preventDefault();
    // Tận dụng passForm.studentId để lấy ID cần reset
    const { studentId } = passForm;

    if (!studentId || studentId.length !== 8) { 
        toast.warning("⚠️ Vui lòng nhập đúng Mã học viên (8 số)!"); 
        return; 
    }

    try {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `users/${studentId}`));

        if (snapshot.exists()) {
            // Cập nhật mật khẩu về mặc định
            await update(ref(db, `users/${studentId}`), {
                password: "BAVNbavn"
            });
            
            // Thông báo mật khẩu mới
            toast.success("✅ Khôi phục thành công! Mật khẩu mới là: BAVNbavn", {
                autoClose: 8000 // Hiện lâu chút để học viên kịp nhớ
            });
            
            // Quay về trang đăng nhập
            setModalView('login');
            setCredentials({ studentId: studentId, password: '' }); // Điền sẵn ID
            setPassForm({ ...passForm, studentId: '' });
        } else {
            toast.error("❌ Mã học viên không tồn tại!");
        }
    } catch (error) {
        console.error(error); 
        toast.error("❌ Lỗi hệ thống: " + error.message);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); setIsAdmin(false); setStudentName('');
    localStorage.removeItem("currentStudentId");
    navigate('/'); 
  };

  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn) return <Navigate to="/" replace />;
    return children;
  };

  const openModal = () => {
      setModalView('login');
      setShowLoginModal(true);
  }

  return (
    <div className="app-container"> 
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      
      <nav className="main-navbar">
        <Link to="/" className="nav-center-logo">
            <img src="/images/logo.png" alt="BeableVN Logo" className="nav-logo-img"/>
        </Link>
        <div className="nav-right-text">
            {isLoggedIn ? (
              <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                <span>Xin chào, <strong>{studentName}</strong></span>
                <button onClick={handleLogout} className="btn-logout">
                  <i className="fa-solid fa-right-from-bracket"></i> Thoát
                </button>
              </div>
            ) : null }
        </div>
      </nav>

      {/* --- MODAL ĐA NĂNG (LOGIN / CHANGE PASS / RESET PASS) --- */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
           <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setShowLoginModal(false)}>×</button>
              
              {/* 🔥 VIEW 1: ĐĂNG NHẬP */}
              {modalView === 'login' && (
                  <>
                    <h2 style={{color:'#002554', marginTop:0}}>ĐĂNG NHẬP</h2>
                    <p style={{color:'#666', fontSize:'14px'}}>Hệ thống thi thử IELTS Online</p>
                    
                    <form onSubmit={handleLoginSubmit}>
                        <div style={{textAlign:'left', fontSize:'12px', fontWeight:'bold', marginTop:10, color:'#555'}}>MÃ HỌC VIÊN</div>
                        <input type="text" className="login-input" placeholder="Nhập 8 số ID..." 
                            value={credentials.studentId} onChange={handleIdChange} inputMode="numeric" />
                        
                        <div style={{textAlign:'left', fontSize:'12px', fontWeight:'bold', marginTop:10, color:'#555'}}>MẬT KHẨU</div>
                        <input type="password" className="login-input" placeholder="Nhập mật khẩu..." 
                            value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})} />
                        
                        <button type="submit" className="btn-submit-login">TRUY CẬP HỆ THỐNG</button>
                    </form>

                    <div style={{marginTop:'20px', fontSize:'13px', display:'flex', flexDirection:'column', gap:'8px'}}>
                        <span onClick={() => setModalView('change-pass')} className="link-switch-mode">
                            <i className="fa-solid fa-key"></i> Đổi mật khẩu
                        </span>
                        <span onClick={() => setModalView('reset-pass')} className="link-switch-mode" style={{color:'#d32f2f'}}>
                            <i className="fa-solid fa-life-ring"></i> Quên mật khẩu?
                        </span>
                    </div>
                  </>
              )}

              {/* 🔥 VIEW 2: ĐỔI MẬT KHẨU */}
              {modalView === 'change-pass' && (
                  <>
                    <h3 style={{color:'#002554', marginTop:0}}>ĐỔI MẬT KHẨU</h3>
                    <p style={{color:'#666', fontSize:'13px', fontStyle:'italic'}}>Nhập thông tin xác thực để đổi mật khẩu mới</p>
                    
                    <form onSubmit={handleChangePassSubmit}>
                        <div style={{textAlign:'left', fontSize:'12px', fontWeight:'bold', marginTop:10, color:'#555'}}>Mã Học Viên</div>
                        <input type="text" className="login-input" placeholder="Nhập 8 số ID..." 
                            value={passForm.studentId} onChange={(e) => {if(/^\d*$/.test(e.target.value) && e.target.value.length<=8) setPassForm({...passForm, studentId: e.target.value})}} />

                        <div style={{textAlign:'left', fontSize:'12px', fontWeight:'bold', marginTop:10, color:'#555'}}>Mật khẩu cũ</div>
                        <input type="password" className="login-input" placeholder="Nhập mật khẩu hiện tại..." 
                            value={passForm.oldPass} onChange={(e) => setPassForm({...passForm, oldPass: e.target.value})} />
                        
                        <div style={{textAlign:'left', fontSize:'12px', fontWeight:'bold', marginTop:10, color:'#555'}}>Mật khẩu mới</div>
                        <input type="password" className="login-input" placeholder="Mật khẩu mới (min 6 ký tự)" 
                            value={passForm.newPass} onChange={(e) => setPassForm({...passForm, newPass: e.target.value})} />

                        <div style={{textAlign:'left', fontSize:'12px', fontWeight:'bold', marginTop:10, color:'#555'}}>Xác nhận mật khẩu</div>
                        <input type="password" className="login-input" placeholder="Nhập lại mật khẩu mới..." 
                            value={passForm.confirmPass} onChange={(e) => setPassForm({...passForm, confirmPass: e.target.value})} />
                        
                        <button type="submit" className="btn-submit-login" style={{background:'#28a745'}}>LƯU MẬT KHẨU MỚI</button>
                    </form>

                    <div style={{marginTop:'15px', fontSize:'13px'}}>
                        <span onClick={() => setModalView('login')} className="link-switch-mode">
                            <i className="fa-solid fa-arrow-left"></i> Quay lại Đăng nhập
                        </span>
                    </div>
                  </>
              )}

              {/* 🔥 VIEW 3: QUÊN MẬT KHẨU (RESET) */}
              {modalView === 'reset-pass' && (
                  <>
                    <h3 style={{color:'#d32f2f', marginTop:0}}>KHÔI PHỤC MẬT KHẨU</h3>
                    <p style={{color:'#666', fontSize:'13px'}}>Nhập ID để reset mật khẩu về mặc định</p>
                    
                    <form onSubmit={handleResetPassSubmit}>
                        <div style={{textAlign:'left', fontSize:'12px', fontWeight:'bold', marginTop:10, color:'#555'}}>Mã Học Viên</div>
                        <input type="text" className="login-input" placeholder="Nhập 8 số ID..." 
                            value={passForm.studentId} 
                            onChange={(e) => {if(/^\d*$/.test(e.target.value) && e.target.value.length<=8) setPassForm({...passForm, studentId: e.target.value})}} 
                        />
                        
                        <button type="submit" className="btn-submit-login" style={{background:'#d32f2f'}}>
                            XÁC NHẬN KHÔI PHỤC
                        </button>
                    </form>

                    <div style={{marginTop:'20px', fontSize:'13px'}}>
                        <span onClick={() => setModalView('login')} className="link-switch-mode">
                            <i className="fa-solid fa-arrow-left"></i> Quay lại Đăng nhập
                        </span>
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
          <Route path="/dashboard" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/test-menu/:testId" element={<ProtectedRoute><TestMenuPage /></ProtectedRoute>} />
          <Route path="/do-test/:testId/:skill" element={<ProtectedRoute><FullTestPage /></ProtectedRoute>} />
          <Route path="/writing-library" element={<WritingLibraryPage />} />
          <Route path="/writing-practice" element={<WritingTestPage />} />
        </Routes>
      </div>

      <footer className="main-footer">
        ©2025 by Be Able VN
      </footer>
    </div>
  );
}

export default App;