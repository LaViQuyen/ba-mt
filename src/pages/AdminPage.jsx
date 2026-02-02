// src/pages/AdminPage.jsx
import { useState } from 'react';
import { db } from '../firebase';
import { ref, set } from "firebase/database";
import { toast } from 'react-toastify'; // <--- Import toast

// Bỏ prop onLogout đi vì không dùng nữa
export default function AdminPage() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleCreateUser = async (e) => {
    e.preventDefault();

    if (!studentId || !password || !fullName) {
      toast.warning("⚠️ Vui lòng nhập đủ thông tin!"); // <--- Sửa
      return;
    }
    if (studentId.length !== 8) {
      toast.warning("⚠️ Mã học viên phải đúng 8 số!"); // <--- Sửa
      return;
    }

    try {
      await set(ref(db, 'users/' + studentId), {
        password: password,
        fullName: fullName,
        createdAt: new Date().toISOString()
      });
      
      // 👇 Thông báo thành công màu xanh
      toast.success(`✅ Đã tạo tài khoản: ${fullName} (ID: ${studentId})`);
      
      setStudentId('');
      setPassword('');
      setFullName('');
    } catch (error) {
      console.error(error);
      toast.error("❌ Lỗi khi lưu dữ liệu: " + error.message); // <--- Sửa
    }
  };

  return (
    <div className="container" style={{maxWidth: '500px', marginTop: '50px'}}>
      <div className="card">
        <h2 style={{color: '#002554', textAlign: 'center'}}>QUẢN TRỊ VIÊN</h2>
        <p style={{textAlign:'center', color:'#666'}}>Tạo tài khoản học viên mới vào hệ thống</p>
        
        <form onSubmit={handleCreateUser}>
          <div style={{marginBottom: 15}}>
            <label style={{fontWeight:'bold', display:'block', marginBottom:5}}>Mã Học Viên (8 số)</label>
            <input 
              className="login-input" 
              value={studentId}
              onChange={(e) => {
                 if (/^\d*$/.test(e.target.value) && e.target.value.length <= 8) {
                    setStudentId(e.target.value);
                 }
              }}
              placeholder="VD: 12345678"
            />
          </div>

          <div style={{marginBottom: 15}}>
            <label style={{fontWeight:'bold', display:'block', marginBottom:5}}>Họ và Tên</label>
            <input 
              className="login-input" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="VD: Nguyễn Văn A"
            />
          </div>

          <div style={{marginBottom: 15}}>
            <label style={{fontWeight:'bold', display:'block', marginBottom:5}}>Mật khẩu</label>
            <input 
              className="login-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu..."
            />
          </div>

          <button type="submit" className="btn-submit-login">LƯU VÀO DATABASE</button>
        </form>

        {/* ĐÃ XÓA PHẦN NÚT QUAY VỀ Ở ĐÂY */}
      </div>
    </div>
  );
}