// src/pages/LandingPage.jsx
import React from 'react';

export default function LandingPage({ onOpenLogin }) {
  return (
    // Giảm paddingTop từ 100px xuống 80px để nội dung đẩy lên cao một chút, cân đối với màn hình
    <div className="container" style={{textAlign: 'center', paddingTop: '80px'}}>
      
      <h1 style={{fontSize: '3rem', color: '#002554', marginBottom: '20px'}}>
        CHÀO MỪNG ĐẾN VỚI BE ABLE VN
      </h1>
      
      <p style={{fontSize: '1.2rem', color: '#555', maxWidth: '600px', margin: '0 auto 40px auto'}}>
        Hệ thống thi thử IELTS Online chuyên nghiệp. <br/>
        Vui lòng đăng nhập để truy cập kho đề thi và bắt đầu làm bài.
      </p>
      
      {/* Nút Đăng nhập */}
      <button 
        onClick={onOpenLogin}
        style={{
            padding: '15px 40px', 
            fontSize: '18px', 
            background: '#002554 ', 
            color: 'white', 
            border: 'none', 
            borderRadius: '30px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,37,84,0.3)'
        }}
      >
        ĐĂNG NHẬP NGAY
      </button>
    </div>
  );
}