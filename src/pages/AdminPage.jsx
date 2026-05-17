// src/pages/AdminPage.jsx
import { useState } from 'react';
import { db } from '../firebase';
// 👇 Thêm 'get' và 'child' vào dòng import này
import { ref, set, get, child } from "firebase/database";
import { toast } from 'react-toastify'; 

export default function AdminPage() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleCreateUser = async (e) => {
    e.preventDefault();

    // 1. Kiểm tra đầu vào cơ bản
    if (!studentId || !password || !fullName) {
      toast.warning("⚠️ Vui lòng nhập đủ thông tin!");
      return;
    }
    if (studentId.length !== 8) {
      toast.warning("⚠️ Mã học viên phải đúng 8 số!");
      return;
    }

    const dbRef = ref(db);

    try {
      // 2. 🔥 KIỂM TRA XEM ID ĐÃ TỒN TẠI CHƯA 🔥
      const snapshot = await get(child(dbRef, `users/${studentId}`));

      if (snapshot.exists()) {
        // Lấy thông tin người cũ để báo cho Admin biết
        const existingUser = snapshot.val();
        toast.error(`⛔ LỖI: ID ${studentId} đã được sử dụng bởi học viên: "${existingUser.fullName}"`);
        return; // 🛑 DỪNG LẠI NGAY, KHÔNG ĐƯỢC GHI ĐÈ
      }

      // 3. Nếu ID chưa có, tiến hành tạo mới
      await set(ref(db, 'users/' + studentId), {
        password: password,
        fullName: fullName,
        createdAt: new Date().toISOString()
      });
      
      toast.success(`✅ Đã tạo tài khoản: ${fullName} (ID: ${studentId})`);
      
      // Reset form
      setStudentId('');
      setPassword('');
      setFullName('');

    } catch (error) {
      console.error(error);
      toast.error("❌ Lỗi hệ thống: " + error.message);
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
                 // Chỉ cho nhập số và tối đa 8 ký tự
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
      </div>
    </div>
  );
}