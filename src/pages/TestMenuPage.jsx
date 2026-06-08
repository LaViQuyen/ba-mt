// src/pages/TestMenuPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// 👉 1. IMPORT FIREBASE
import { ref, get, child } from "firebase/database";
import { db } from '../firebase';

export default function TestMenuPage() {
  const { testId } = useParams();
  
  // 👉 2. KHAI BÁO STATE
  const [testData, setTestData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 👉 3. GỌI DỮ LIỆU TỪ FIREBASE DỰA VÀO TEST ID
  useEffect(() => {
    const fetchTestInfo = async () => {
      try {
        const dbRef = ref(db);
        // Chui thẳng vào thư mục mockTests và tìm đề có ID tương ứng
        const snapshot = await get(child(dbRef, `mockTests/${testId}`));
        
        if (snapshot.exists()) {
          setTestData(snapshot.val());
        } else {
          setTestData(null);
        }
      } catch (error) {
        console.error("Lỗi tải thông tin đề thi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestInfo();
  }, [testId]);

  // 👉 4. XỬ LÝ MÀN HÌNH CHỜ (LOADING)
  if (loading) {
    return (
      <div style={{ width: '100%', textAlign: 'center', padding: '80px 20px', color: '#2B6830' }}>
          <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '2.5rem', marginBottom: '15px' }}></i>
          <h3 style={{ margin: 0 }}>Đang tải thông tin đề thi...</h3>
          <p style={{ color: '#666' }}>Vui lòng chờ trong giây lát</p>
      </div>
    );
  }

  // NẾU KHÔNG TÌM THẤY ĐỀ
  if (!testData) {
    return (
      <div className="test-menu-container" style={{ textAlign: 'center', padding: '80px 20px' }}>
        <i className="fa-regular fa-face-frown" style={{ fontSize: '4rem', color: '#ef4444', marginBottom: '20px' }}></i>
        <h2 style={{ color: '#2B6830' }}>❌ Không tìm thấy đề thi!</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>Đề thi này không tồn tại hoặc đã bị gỡ bỏ.</p>
        <Link to="/dashboard" style={{ background: '#2B6830', color: 'white', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>Quay lại Trang chủ</Link>
      </div>
    );
  }

  // 👉 HIỂN THỊ GIAO DIỆN CHỌN KỸ NĂNG NHƯ CŨ
  return (
    <div className="test-menu-container">
        
      <div className="test-info-header">
        <h1 className="test-title">
          {testData.testName}
        </h1>
        <p className="test-subtitle">Chọn kỹ năng bạn muốn thực hành</p>
      </div>

      <div className="test-menu-grid">
          
          {/* LISTENING */}
          <Link to={`/do-test/${testId}/listening`} state={{ fromMenu: true }}>
            <div className="skill-card-hover">
                <div className="skill-card-icon">
                    <i className="fa-solid fa-headphones"></i>
                </div>
                <div className="card-content-group">
                    <div className="skill-card-title">Listening</div>
                    <div className="skill-card-desc">
                        4 Parts • 40 Questions<br/>
                        Includes audio playback.
                    </div>
                    {/* Nút Start - Trên mobile sẽ biến thành mũi tên nhỏ gọn */}
                    <div className="skill-card-btn">
                        Start <span className="desktop-text">Listening</span> <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
          </Link>

          {/* READING */}
          <Link to={`/do-test/${testId}/reading`} state={{ fromMenu: true }}>
            <div className="skill-card-hover">
                <div className="skill-card-icon">
                    <i className="fa-solid fa-book-open"></i>
                </div>
                <div className="card-content-group">
                    <div className="skill-card-title">Reading</div>
                    <div className="skill-card-desc">
                        3 Passages • 40 Questions<br/>
                        Features highlighting tools.
                    </div>
                    <div className="skill-card-btn">
                        Start <span className="desktop-text">Reading</span> <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
          </Link>

          {/* WRITING */}
          <Link to={`/do-test/${testId}/writing`} state={{ fromMenu: true }}>
            <div className="skill-card-hover">
                <div className="skill-card-icon">
                    <i className="fa-solid fa-pen-to-square"></i>
                </div>
                <div className="card-content-group">
                    <div className="skill-card-title">Writing</div>
                    <div className="skill-card-desc"> 
                        Task 1 & Task 2<br/>
                        AI grading assistance.
                    </div>
                    <div className="skill-card-btn">
                        Start <span className="desktop-text">Writing</span> <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
          </Link>

      </div>
    </div>
  );
}