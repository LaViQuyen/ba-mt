// src/pages/AdminPage.jsx
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { allTests } from "../data/index";
import { ref, set, get, child, update, remove } from "firebase/database";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'; 

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('userList'); 

  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('normal'); 

  const [usersList, setUsersList] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');

  // 👉 CÁC STATE QUẢN LÝ DANH SÁCH LỖI
  const [reportedBugs, setReportedBugs] = useState([]);
  const [loadingBugs, setLoadingBugs] = useState(false);

  const [wId, setWId] = useState('');
  const [wType, setWType] = useState('TASK 1');
  const [wCategory, setWCategory] = useState('');
  const [wContent, setWContent] = useState('');
  const [wImage, setWImage] = useState('');

  const [mockCode, setMockCode] = useState('');

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link'],
      ['clean'] 
    ],
  };

    const handleBulkUploadTests = async () => {
        toast.info(`⏳ Đang tự động quét và đẩy ${allTests.length} đề lên Cloud...`);
        
        try {
            // Chạy vòng lặp qua mảng allTests của bạn
            for (const test of allTests) {
                if (!test.id) continue; 
                
                // 👉 THÊM DÒNG NÀY ĐỂ CỨU DỮ LIỆU: Cấp trạng thái hiển thị cho đề thi
                // Đặt là 'published' nếu bạn muốn nó hiện luôn ra trang chủ cho học viên
                // Hoặc đặt là 'pending' nếu muốn đẩy vào Review Hub cho QA duyệt lại
                test.status = 'published'; 
                
                await set(ref(db, `mockTests/${test.id}`), test);
                console.log(`✅ Đã up thành công đề: ${test.testName}`);
            }
            
            toast.success(`🚀 XUẤT SẮC! Đã đồng bộ thành công ${allTests.length} đề thi lên Firebase!`);
        } catch (error) {
            console.error("Lỗi Bulk Upload:", error);
            toast.error("❌ Thất bại: " + error.message);
        }
    };

  const fetchUsers = async () => {
    try {
      setLoadingUsers(true);
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, 'users'));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const arr = Object.entries(data).map(([id, val]) => ({ id, ...val }));
        arr.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
        setUsersList(arr);
      } else {
        setUsersList([]);
      }
    } catch (error) {
      console.error("Lỗi tải danh sách tài khoản:", error);
    } finally {
      setLoadingUsers(false);
    }
  };

  // 👉 HÀM HÚT CÁC ĐỀ BỊ BÁO LỖI (CẢ MOCK LẪN WRITING)
  const fetchReportedBugs = async () => {
    try {
      setLoadingBugs(true);
      const dbRef = ref(db);
      let allReported = [];

      // Lấy lỗi từ Mock Tests
      const mockSnap = await get(child(dbRef, 'mockTests'));
      if (mockSnap.exists()) {
        const mocks = Object.values(mockSnap.val()).filter(test => test.status === 'reported');
        allReported = [...allReported, ...mocks.map(m => ({ ...m, _collection: 'mockTests', displayName: m.testName }))];
      }

      // Lấy lỗi từ Writing Library
      const writeSnap = await get(child(dbRef, 'writingLibrary'));
      if (writeSnap.exists()) {
        const writings = Object.values(writeSnap.val()).filter(item => item.status === 'reported');
        allReported = [...allReported, ...writings.map(w => ({ ...w, _collection: 'writingLibrary', displayName: `Writing: ${w.id}` }))];
      }

      setReportedBugs(allReported);
    } catch (error) {
      console.error("Lỗi tải danh sách báo cáo:", error);
    } finally {
      setLoadingBugs(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'userList') {
        fetchUsers();
    } else if (activeTab === 'bugList') {
        fetchReportedBugs();
    }
  }, [activeTab]);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    if (!studentId || !password || !fullName) { toast.warning("⚠️ Vui lòng nhập đủ thông tin!"); return; }
    if (studentId.length !== 8) { toast.warning("⚠️ Mã học viên phải đúng 8 số!"); return; }

    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, `users/${studentId}`));
      if (snapshot.exists()) {
        toast.error(`⛔ LỖI: ID ${studentId} đã tồn tại!`);
        return; 
      }
      await set(ref(db, 'users/' + studentId), {
        password: password, fullName: fullName, role: role, createdAt: new Date().toISOString()
      });
      toast.success(`✅ Đã tạo tài khoản: ${fullName}`);
      setStudentId(''); setPassword(''); setFullName(''); setRole('normal');
      setActiveTab('userList');
    } catch (error) { toast.error("❌ Lỗi hệ thống: " + error.message); }
  };

  const handleToggleRole = async (userId, currentRole) => {
      const newRole = currentRole === 'normal' ? 'private' : 'normal';
      const confirmMsg = newRole === 'private' 
        ? `Thăng cấp tài khoản ${userId} thành NGƯỜI KIỂM DUYỆT (PRIVATE)?`
        : `Hạ cấp tài khoản ${userId} về HỌC VIÊN (NORMAL)?`;
      if (!window.confirm(confirmMsg)) return;
      try {
          await update(ref(db, `users/${userId}`), { role: newRole });
          toast.success(`🔄 Đã cập nhật quyền cho ${userId}`);
          fetchUsers(); 
      } catch (error) { toast.error("❌ Lỗi đổi quyền: " + error.message); }
  };

  const handleResetPassword = async (userId) => {
      if (!window.confirm(`Đặt lại mật khẩu cho ${userId} về mặc định "BAVNbavn"?`)) return;
      try {
          await update(ref(db, `users/${userId}`), { password: 'BAVNbavn' });
          toast.success(`🔑 Đã reset mật khẩu tài khoản ${userId}!`);
      } catch (error) { toast.error("❌ Lỗi reset pass: " + error.message); }
  };

  // 👉 HÀM KHÓA / MỞ KHÓA TÀI KHOẢN
  const handleToggleLock = async (userId, currentLockStatus) => {
      const isCurrentlyLocked = currentLockStatus || false;
      const confirmMsg = isCurrentlyLocked 
          ? `🔓 MỞ KHÓA cho tài khoản ${userId} để họ được làm bài trở lại?`
          : `🔒 KHÓA tài khoản ${userId}? (Học viên vẫn đăng nhập được nhưng KHÔNG THỂ làm bài thi)`;
      
      if (!window.confirm(confirmMsg)) return;
      try {
          await update(ref(db, `users/${userId}`), { isLocked: !isCurrentlyLocked });
          toast.success(isCurrentlyLocked ? `🔓 Đã mở khóa cho ${userId}` : `🔒 Đã khóa tài khoản ${userId}`);
          fetchUsers(); // Tải lại danh sách
      } catch (error) { toast.error("❌ Lỗi cập nhật: " + error.message); }
  };

  // 👉 LOGIC LỌC DANH SÁCH TÌM KIẾM
  const filteredUsers = usersList.filter(user => 
      user.id.includes(searchTerm) || 
      (user.fullName && user.fullName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleDeleteUser = async (userId, name) => {
      if (!window.confirm(`🚨 CẢNH BÁO! \nXóa vĩnh viễn tài khoản "${name}" (ID: ${userId})?`)) return;
      try {
          await remove(ref(db, `users/${userId}`));
          toast.success(`🗑️ Đã xóa tài khoản ${userId}.`);
          fetchUsers();
      } catch (error) { toast.error("❌ Lỗi xóa: " + error.message); }
  };

  // 👉 HÀM THỦ CÔNG ĐỂ ADMIN CHỦ ĐỘNG ĐÓNG LỖI VÀ TÁI SINH ĐỀ
  const handleResolveBug = async (id, collection) => {
      if (!window.confirm(`Xác nhận đề ${id} đã được sửa xong và muốn đưa về lại trạng thái Chờ duyệt (Pending)?`)) return;
      try {
          await update(ref(db, `${collection}/${id}`), {
              status: 'pending',
              bugNotes: null // Bắn lệnh xóa sạch nhật ký lỗi trên Firebase
          });
          toast.success(`✅ Đề ${id} đã trở lại trạng thái Chờ duyệt!`);
          fetchReportedBugs();
      } catch (error) {
          toast.error("❌ Lỗi cập nhật: " + error.message);
      }
  };

  const handleDeleteReportedMock = async (id, name, collection) => {
      if (!window.confirm(`🚨 Xóa vĩnh viễn hoàn toàn đề thi "${name}" (ID: ${id}) khỏi Firebase?`)) return;
      try {
          await remove(ref(db, `${collection}/${id}`));
          toast.success(`🗑️ Đã dọn dẹp và xóa sổ đề lỗi: ${id}`);
          fetchReportedBugs();
      } catch (error) { toast.error("❌ Thất bại: " + error.message); }
  };

  const handleCreateWriting = async (e) => {
      e.preventDefault();
      const cleanContent = wContent.replace(/<[^>]*>?/gm, '').trim();
      if (!wId || !cleanContent) { toast.warning("⚠️ Vui lòng nhập ID và Nội dung đề bài!"); return; }

      const newWriting = { id: wId.trim(), type: wType, status: 'pending', createdAt: new Date().toISOString() };
      if (wType === 'TASK 1') {
          newWriting.title = wContent; newWriting.category = wCategory || 'Mixed Charts';
          if (wImage) newWriting.image = wImage;
      } else {
          newWriting.question = wContent; newWriting.title = wCategory || 'General Issues';
      }

      try {
          const dbRef = ref(db, `writingLibrary/${newWriting.id}`);
          const snap = await get(dbRef);
          if (snap.exists()) { if (!window.confirm("⚠️ ID này đã tồn tại. Bạn có muốn GHI ĐÈ không?")) return; }
          await set(dbRef, newWriting);
          toast.success(`🚀 Đã tải lên đề Writing: ${newWriting.id} (Chờ duyệt)`);
          setWId(''); setWContent(''); setWImage(''); setWCategory('');
      } catch (error) { toast.error("❌ Lỗi tải lên: " + error.message); }
  };

  const handleUploadMockTest = async () => {
      if (!mockCode.trim()) { toast.warning("⚠️ Vui lòng dán code của đề thi vào ô trống!"); return; }
      try {
          let codeToParse = mockCode.trim();
          const firstBrace = codeToParse.indexOf('{');
          const lastBrace = codeToParse.lastIndexOf('}');
          if (firstBrace !== -1 && lastBrace !== -1) { codeToParse = codeToParse.substring(firstBrace, lastBrace + 1); }

          const parseJSObject = new Function("return " + codeToParse);
          const testObj = parseJSObject();

          if (!testObj || !testObj.id || !testObj.testName) {
              toast.error("❌ Code không hợp lệ! Đề thi phải có ít nhất 'id' và 'testName'."); return;
          }
          testObj.status = 'pending';
          
          const dbRef = ref(db, `mockTests/${testObj.id}`);
          const snap = await get(dbRef);
          if (snap.exists()) {
              if (!window.confirm(`⚠️ Đề thi có ID "${testObj.id}" đã tồn tại. GHI ĐÈ?`)) return;
          }
          await set(dbRef, testObj);
          toast.success(`🚀 Đã tải lên Mock Test: ${testObj.testName} (Chờ duyệt)`);
          setMockCode('');
      } catch (error) { toast.error("❌ Lỗi Cú Pháp Code: Kiểm tra lại dấu ngoặc, phẩy."); }
  };

  const MenuButton = ({ id, icon, label }) => (
      <button 
          onClick={() => setActiveTab(id)}
          style={{ 
              background: activeTab === id ? '#1e40af' : 'transparent', color: 'white', 
              border: 'none', padding: '10px 15px', borderRadius: '8px', textAlign: 'left',
              cursor: 'pointer', fontSize: '0.95rem', fontWeight: activeTab === id ? 'bold' : 'normal',
              transition: '0.2s', display: 'flex', alignItems: 'center', gap: '10px'
          }}
      >
          <i className={icon} style={{ width: '20px' }}></i> {label}
      </button>
  );

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 65px)', background: '#f8fafc', overflow: 'hidden' }}>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      
      <style>{`
          .main-footer { display: none !important; }
          .quill { background: white; border-radius: 4px; }
          .ql-container { font-size: 1rem; font-family: inherit; }
      `}</style>

      {/* --- SIDEBAR TRÁI --- */}
      <div style={{ 
          width: '280px', background: '#002554', color: 'white', padding: '30px 20px', 
          display: 'flex', flexDirection: 'column', gap: '5px', boxShadow: '2px 0 10px rgba(0,0,0,0.1)', flexShrink: 0,
          height: '100%', overflowY: 'auto'
      }}>
          <h2 style={{ margin: '0 0 30px 0', fontSize: '1.2rem', textAlign: 'center', color: '#e2e8f0', letterSpacing: '1px' }}>
              <i className="fa-solid fa-shield-halved"></i> ADMIN PANEL
          </h2>

          <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 'bold', margin: '15px 0 5px 10px', textTransform: 'uppercase' }}>
              👥 QUẢN LÝ TÀI KHOẢN
          </div>
          <MenuButton id="userList" icon="fa-solid fa-address-book" label="Danh Sách Tài Khoản" />
          <MenuButton id="userCreate" icon="fa-solid fa-user-plus" label="Tạo Tài Khoản Mới" />

          <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 'bold', margin: '25px 0 5px 10px', textTransform: 'uppercase' }}>
              📚 QUẢN LÝ ĐỀ THI
          </div>
          <MenuButton id="mock" icon="fa-solid fa-headphones" label="Đăng Đề Mock Test" />
          <MenuButton id="writing" icon="fa-solid fa-pen-nib" label="Đăng Đề Writing" />

          <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 'bold', margin: '25px 0 5px 10px', textTransform: 'uppercase' }}>
              🛠️ HỆ THỐNG BẢO TRÌ
          </div>
          <MenuButton id="bugList" icon="fa-solid fa-bug" label="🏥 Xử Lý Lỗi Đề" />
      </div>

      {/* --- CONTENT PHẢI --- */}
      <div style={{ flex: 1, padding: '20px 40px', overflowY: 'auto', height: '100%' }}>
          
          {/* TAB 1: DANH SÁCH TÀI KHOẢN */}
          {activeTab === 'userList' && (
              <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                  <div className="card" style={{ padding: '20px 30px', minHeight: '400px' }}>
                      {/* 👉 HEADER & THANH TÌM KIẾM ĐƯỢC GOM CHUNG 1 DÒNG */}
                      <div style={{ borderBottom: '2px solid #eee', paddingBottom: '15px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                          <h2 style={{ color: '#002554', margin: 0 }}>
                              <i className="fa-solid fa-address-book"></i> Danh Sách Tài Khoản
                          </h2>
                          
                          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                              <div style={{ position: 'relative', width: '300px' }}>
                                  <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
                                  <input 
                                      type="text" 
                                      placeholder="Tìm ID hoặc Tên học viên..." 
                                      value={searchTerm}
                                      onChange={(e) => setSearchTerm(e.target.value)}
                                      style={{ width: '100%', padding: '10px 15px 10px 40px', borderRadius: '20px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.95rem' }}
                                  />
                              </div>

                              <span style={{ fontSize: '1rem', background: '#e2e8f0', color: '#475569', padding: '8px 15px', borderRadius: '20px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                                  Tổng: {usersList.length}
                              </span>
                          </div>
                      </div>

                      {loadingUsers ? (
                          <div style={{ textAlign: 'center', padding: '50px', color: '#002554' }}>
                              <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '2rem' }}></i><p>Đang tải danh sách...</p>
                          </div>
                      ) : filteredUsers.length === 0 ? (
                          <p style={{ textAlign: 'center', color: '#94a3b8', padding: '40px' }}>Không tìm thấy học viên nào phù hợp.</p>
                      ) : (
                          <div style={{ overflowX: 'auto' }}>
                              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', textAlign: 'left' }}>
                                  <thead>
                                      <tr style={{ borderBottom: '2px solid #cbd5e1', color: '#475569', fontWeight: 'bold' }}>
                                          <th style={{ padding: '10px' }}>ID</th>
                                          <th style={{ padding: '10px' }}>Họ và Tên</th>
                                          <th style={{ padding: '10px' }}>Quyền & Trạng thái</th>
                                          <th style={{ padding: '10px', textAlign: 'center' }}>Hành động</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {filteredUsers.map((user) => {
                                          const safeRole = user.role || 'normal';
                                          const isLocked = user.isLocked || false; 

                                          return (
                                              <tr key={user.id} style={{ borderBottom: '1px solid #e2e8f0', transition: '0.2s', opacity: isLocked ? 0.7 : 1 }} onMouseOver={e => e.currentTarget.style.background = '#f8fafc'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                                                  <td style={{ padding: '12px 10px', fontWeight: 'bold', color: '#0f172a' }}>{user.id}</td>
                                                  <td style={{ padding: '12px 10px', color: '#334155', textDecoration: isLocked ? 'line-through' : 'none' }}>{user.fullName}</td>
                                                  <td style={{ padding: '12px 10px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                      <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold', background: safeRole === 'private' ? '#fef3c7' : '#e0f2fe', color: safeRole === 'private' ? '#d97706' : '#0369a1' }}>
                                                          {safeRole === 'private' ? '🕵️‍♂️ PRIVATE' : '👤 NORMAL'}
                                                      </span>
                                                      {isLocked && (
                                                          <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold', background: '#fee2e2', color: '#dc2626' }}>
                                                              <i className="fa-solid fa-lock"></i> BỊ KHÓA
                                                          </span>
                                                      )}
                                                  </td>
                                                  <td style={{ padding: '12px 10px', textAlign: 'center' }}>
                                                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                                                          <button onClick={() => handleToggleRole(user.id, safeRole)} title={safeRole === 'normal' ? "Thăng cấp" : "Hạ cấp"} style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer', color: '#475569' }}>
                                                              <i className={safeRole === 'normal' ? "fa-solid fa-arrow-up" : "fa-solid fa-arrow-down"}></i>
                                                          </button>

                                                          <button onClick={() => handleToggleLock(user.id, isLocked)} title={isLocked ? "Mở khóa tài khoản" : "Khóa tài khoản"} style={{ background: isLocked ? '#dcfce7' : '#fff7ed', border: `1px solid ${isLocked ? '#86efac' : '#fed7aa'}`, borderRadius: '4px', padding: '6px 10px', cursor: 'pointer', color: isLocked ? '#166534' : '#c2410c' }}>
                                                              <i className={isLocked ? "fa-solid fa-lock-open" : "fa-solid fa-lock"}></i>
                                                          </button>

                                                          <button onClick={() => handleResetPassword(user.id)} title="Reset Pass" style={{ background: '#e0f2fe', border: '1px solid #bae6fd', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer', color: '#0284c7' }}>
                                                              <i className="fa-solid fa-key"></i>
                                                          </button>
                                                          <button onClick={() => handleDeleteUser(user.id, user.fullName)} title="Xóa tài khoản" style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer', color: '#dc2626' }}>
                                                              <i className="fa-solid fa-trash-can"></i>
                                                          </button>
                                                      </div>
                                                  </td>
                                              </tr>
                                          )
                                      })}
                                  </tbody>
                              </table>
                          </div>
                      )}
                  </div>
              </div>
          )}

          {/* TAB 2: FORM TẠO TÀI KHOẢN */}
          {activeTab === 'userCreate' && (
              <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                  <div className="card" style={{ padding: '20px 30px' }}>
                      <h2 style={{color: '#002554', marginTop: 0, borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '15px'}}>
                          <i className="fa-solid fa-user-plus"></i> Tạo Tài Khoản Mới
                      </h2>
                      <form onSubmit={handleCreateUser}>
                        <div style={{marginBottom: 15}}>
                          <label style={{fontWeight:'bold', display:'block', marginBottom:5, color: '#334155'}}>Mã Học Viên (8 số)</label>
                          <input className="login-input" value={studentId} onChange={(e) => { if (/^\d*$/.test(e.target.value) && e.target.value.length <= 8) setStudentId(e.target.value); }} placeholder="VD: 12345678" />
                        </div>
                        <div style={{marginBottom: 15}}>
                          <label style={{fontWeight:'bold', display:'block', marginBottom:5, color: '#334155'}}>Họ và Tên</label>
                          <input className="login-input" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="VD: Nguyễn Văn A" />
                        </div>
                        <div style={{marginBottom: 15}}>
                          <label style={{fontWeight:'bold', display:'block', marginBottom:5, color: '#334155'}}>Mật khẩu</label>
                          <input type="password" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Nhập mật khẩu..." />
                        </div>
                        <div style={{marginBottom: 20}}>
                          <label style={{fontWeight:'bold', display:'block', marginBottom:5, color: '#334155'}}>Phân quyền (Role)</label>
                          <select className="login-input" value={role} onChange={(e) => setRole(e.target.value)} style={{ cursor: 'pointer', background: '#f8fafc' }}>
                              <option value="normal">👤 Normal (Học viên thi bình thường)</option>
                              <option value="private">🕵️‍♂️ Private (Người kiểm duyệt đề)</option>
                          </select>
                        </div>
                        <button type="submit" className="btn-submit-login" style={{ fontSize: '1rem', padding: '12px' }}>LƯU VÀO HỆ THỐNG</button>
                      </form>
                  </div>
              </div>
          )}

          {/* TAB 3: TẢI LÊN MOCK TEST */}
          {activeTab === 'mock' && (
              <div style={{ maxWidth: '800px', margin: '0 auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="card" style={{ padding: '20px 30px', borderTop: '5px solid #c2410c', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h2 style={{color: '#c2410c', marginTop: 0, marginBottom: '5px'}}>
                          <i className="fa-solid fa-code"></i> Tải Lên Đề Mock Test
                      </h2>
                      <p style={{ color: '#64748b', marginBottom: '15px', fontSize: '0.95rem' }}>
                          Dán object cấu trúc (JSON/JS) của một đề thi mới vào đây. Đề bài sẽ mang trạng thái <strong>Chờ duyệt (Pending)</strong>.
                      </p>
                      
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                          <textarea 
                              value={mockCode}
                              onChange={(e) => setMockCode(e.target.value)}
                              placeholder="Dán code Object JS của đề thi vào đây...&#10;VD:&#10;{&#10;  id: 'cam21_test1',&#10;  testName: 'Cambridge IELTS 21 Test 1',&#10;  ...&#10;}"
                              style={{ flex: 1, width: '100%', padding: '15px', borderRadius: '8px', minHeight: '220px', border: '1px solid #cbd5e1', background: '#1e293b', color: '#10b981', fontFamily: 'monospace', fontSize: '13px', resize: 'vertical', lineHeight: '1.6' }}
                              spellCheck="false"
                          />
                          <button onClick={handleUploadMockTest} className="btn-submit-login" style={{ background: '#c2410c', fontSize: '1rem', padding: '12px' }}>
                              <i className="fa-solid fa-cloud-arrow-up"></i> KIỂM TRA CODE & TẢI LÊN MÂY
                          </button>
                      </div>
                  </div>
              </div>
          )}
            {/*<button 
                onClick={handleBulkUploadTests} 
                style={{ 
                    background: '#10b981', 
                    color: 'white', 
                    padding: '12px 25px', 
                    fontSize: '1rem', 
                    fontWeight: 'bold', 
                    border: 'none', 
                    borderRadius: '6px', 
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    margin: '20px 0'
                }}
            >
                🚀 ĐỒNG BỘ 28 ĐỀ THI LÊN FIREBASE (BULK UPLOAD)
            </button>*/}
          {/* TAB 4: TẠO ĐỀ WRITING VỚI RICH TEXT EDITOR */}
          {activeTab === 'writing' && (
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                  <div className="card" style={{ padding: '20px 30px', borderTop: '5px solid #0f766e' }}>
                      <h2 style={{color: '#0f766e', marginTop: 0, marginBottom: '5px'}}>
                          <i className="fa-solid fa-pen-nib"></i> Tạo Đề Writing
                      </h2>
                      <p style={{ color: '#64748b', marginBottom: '15px', fontSize: '0.95rem' }}>Đề bài tải lên sẽ mặc định ở trạng thái <strong>Chờ duyệt (Pending)</strong>.</p>
                      
                      <form onSubmit={handleCreateWriting}>
                        <div style={{ display: 'flex', gap: '15px', marginBottom: 15 }}>
                            <div style={{ flex: 1 }}>
                              <label style={{fontWeight:'bold', display:'block', marginBottom:5, color: '#334155', fontSize: '0.85rem'}}>ID Đề bài</label>
                              <input className="login-input" value={wId} onChange={(e) => setWId(e.target.value)} placeholder="VD: t1_99" required />
                            </div>
                            <div style={{ flex: 1 }}>
                              <label style={{fontWeight:'bold', display:'block', marginBottom:5, color: '#334155', fontSize: '0.85rem'}}>Loại Task</label>
                              <select className="login-input" value={wType} onChange={(e) => setWType(e.target.value)} style={{ cursor: 'pointer' }}>
                                  <option value="TASK 1">TASK 1</option>
                                  <option value="TASK 2">TASK 2</option>
                              </select>
                            </div>
                        </div>
                        
                        <div style={{marginBottom: 15}}>
                          <label style={{fontWeight:'bold', display:'block', marginBottom:5, color: '#334155', fontSize: '0.85rem'}}>Chủ đề / Thể loại (Tùy chọn)</label>
                          <input 
                              className="login-input" 
                              list="category-suggestions"
                              value={wCategory} 
                              onChange={(e) => setWCategory(e.target.value)} 
                              placeholder={wType === 'TASK 1' ? "VD: Graphs & Charts" : "VD: Education"} 
                          />
                          <datalist id="category-suggestions">
                              {wType === 'TASK 1' ? (
                                  <>
                                      <option value="Graphs & Charts" />
                                      <option value="Maps" />
                                      <option value="Processes" />
                                      <option value="Mixed Charts" />
                                  </>
                              ) : (
                                  <>
                                      <option value="Education" />
                                      <option value="Environment" />
                                      <option value="Technology" />
                                      <option value="Health" />
                                      <option value="Crime and Law" />
                                      <option value="Advertising and Media" />
                                      <option value="Work and Employment" />
                                      <option value="Society and Family" />
                                      <option value="Urbanization and Housing" />
                                      <option value="Sports" />
                                      <option value="Art and Culture" />
                                      <option value="Food and Agriculture" />
                                      <option value="Globalization and International Issues" />
                                      <option value="Tourism" />
                                      <option value="Transport" />
                                      <option value="Economy" />
                                  </>
                              )}
                          </datalist>
                        </div>
                        
                        {wType === 'TASK 1' && (
                            <div style={{marginBottom: 15}}>
                              <label style={{fontWeight:'bold', display:'block', marginBottom:5, color: '#334155', fontSize: '0.85rem'}}>Link Ảnh (Image URL)</label>
                              <input className="login-input" value={wImage} onChange={(e) => setWImage(e.target.value)} placeholder="https://..." />
                            </div>
                        )}
                        
                        <div style={{marginBottom: 60}}> 
                          <label style={{fontWeight:'bold', display:'block', marginBottom:5, color: '#334155', fontSize: '0.85rem'}}>Đề bài (Prompt)</label>
                          <ReactQuill 
                              theme="snow" 
                              value={wContent} 
                              onChange={setWContent} 
                              modules={quillModules}
                              style={{ height: '220px' }}
                              placeholder="Soạn thảo nội dung đề bài (Hỗ trợ in đậm, in nghiêng, list...)"
                          />
                        </div>

                        <button type="submit" className="btn-submit-login" style={{ background: '#0f766e', fontSize: '1rem', padding: '12px' }}>ĐẨY LÊN HỆ THỐNG (PENDING)</button>
                      </form>
                  </div>
              </div>
          )}

          {/* 👉 TAB 5: BỆNH VIỆN - TRẠM XỬ LÝ LỖI ĐỀ */}
          {activeTab === 'bugList' && (
              <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                  <div className="card" style={{ padding: '20px 30px', minHeight: '400px', borderTop: '5px solid #ef4444' }}>
                      <h2 style={{color: '#dc2626', marginTop: 0, borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '15px'}}>
                          <span><i className="fa-solid fa-bug"></i> 🏥 Trạm Xử Lý Lỗi Đề (Reported)</span>
                      </h2>
                      <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '20px' }}>
                          💡 <strong>Quy trình:</strong> Đọc ghi chú bên dưới ➡️ Mở file code trên máy tính sửa lại ➡️ Tải đè lên hệ thống ➡️ Bấm <strong>"Đã Sửa Xong"</strong> để bàn giao lại cho QA kiểm duyệt.
                      </p>

                      {loadingBugs ? (
                          <div style={{ textAlign: 'center', padding: '50px', color: '#ef4444' }}>
                              <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '2rem' }}></i><p>Đang quét danh sách lỗi...</p>
                          </div>
                      ) : reportedBugs.length === 0 ? (
                          <div style={{ textAlign: 'center', padding: '50px', color: '#64748b' }}>
                              <i className="fa-solid fa-circle-check" style={{ fontSize: '3rem', color: '#10b981', marginBottom: '15px' }}></i>
                              <h3>Hệ thống sạch lỗi!</h3>
                              <p>Không có đề thi nào bị báo cáo lỗi vào lúc này.</p>
                          </div>
                      ) : (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                              {reportedBugs.map((test) => (
                                  <div key={test.id} style={{ border: '1px solid #fca5a5', background: '#fffefc', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #fca5a5', paddingBottom: '10px', marginBottom: '15px' }}>
                                          <div>
                                              <span style={{ background: '#ef4444', color: 'white', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', marginRight: '10px' }}>
                                                  ID: {test.id}
                                              </span>
                                              <strong style={{ fontSize: '1.1rem', color: '#0f172a' }}>{test.displayName}</strong>
                                          </div>
                                          
                                          <div style={{ display: 'flex', gap: '10px' }}>
                                              {/* NÚT THẦN THÁNH ĐÃ QUAY TRỞ LẠI */}
                                              <button onClick={() => handleResolveBug(test.id, test._collection)} style={{ background: '#10b981', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.85rem', transition: '0.2s' }} onMouseOver={e => e.target.style.background = '#059669'} onMouseOut={e => e.target.style.background = '#10b981'}>
                                                  <i className="fa-solid fa-circle-check"></i> ĐÃ SỬA XONG
                                              </button>

                                              <button onClick={() => handleDeleteReportedMock(test.id, test.displayName, test._collection)} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.85rem', transition: '0.2s' }} onMouseOver={e => e.target.style.background = '#dc2626'} onMouseOut={e => e.target.style.background = '#ef4444'}>
                                                  <i className="fa-solid fa-trash-can"></i> XÓA ĐỀ NÀY
                                              </button>
                                          </div>
                                      </div>
                                      
                                      {/* NHẬT KÝ LỖI CHI TIẾT */}
                                      <div style={{ background: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '15px', borderRadius: '4px', color: '#991b1b', fontSize: '0.95rem', fontFamily: 'monospace', whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                                          {test.bugNotes || "Không có nội dung mô tả lỗi cụ thể."}
                                      </div>
                                  </div>
                              ))}
                          </div>
                      )}
                  </div>
              </div>
          )}

      </div>
    </div>
  );
}