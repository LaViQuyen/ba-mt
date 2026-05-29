// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// 👉 1. IMPORT CÁC HÀM CỦA FIREBASE
import { ref, get, child } from "firebase/database";
import { db } from '../firebase';
import { toast } from 'react-toastify';

export default function HomePage() {
  const navigate = useNavigate(); // Khởi tạo hook
  // 👉 2. KHAI BÁO STATE ĐỂ LƯU DỮ LIỆU TỪ MẠNG
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  // 👉 3. GỌI DỮ LIỆU TỪ FIREBASE KHI TRANG VỪA MỞ LÊN
  useEffect(() => {
    const fetchTests = async () => {
      try {
        const dbRef = ref(db);
        // Kéo dữ liệu từ thư mục 'mockTests' trên Firebase
        const snapshot = await get(child(dbRef, 'mockTests'));
        
        if (snapshot.exists()) {
          const data = snapshot.val();
          // Firebase trả về Object, ta cần chuyển nó thành Mảng (Array) để map() được
          const testsArray = Object.values(data);
          
          // 🔥 LỌC BẢO MẬT: Chỉ lấy những đề đã được duyệt (published)
          let publishedTests = testsArray.filter(test => test.status === 'published');
          
          // 🌟 DÒNG PHÉP THUẬT SẮP XẾP TỰ NHIÊN (NATURAL SORT) 🌟
          publishedTests.sort((a, b) => a.testName.localeCompare(b.testName, undefined, { numeric: true }));
          
          setTests(publishedTests);
        } else {
          setTests([]);
        }
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
        toast.error("Không thể kết nối tải danh sách đề thi.");
      } finally {
        setLoading(false); // Kéo xong (dù thành công hay thất bại) cũng tắt hiệu ứng xoay xoay
      }
    };

    fetchTests();
  }, []);

  // 👉 HÀM GÁC CỔNG: KIỂM TRA KHÓA TRƯỚC KHI VÀO THI
  const handleStartTest = async (e, testId) => {
    e.preventDefault(); // Chặn việc chuyển trang ngay lập tức của thẻ Link
    const studentId = localStorage.getItem("currentStudentId");

    // Nếu là khách (Guest) hoặc chưa đăng nhập (dù hệ thống đã chặn ở ngoài)
    if (!studentId || studentId === 'Guest') {
        navigate(`/test-menu/${testId}`);
        return;
    }

    try {
        const dbRef = ref(db);
        const snap = await get(child(dbRef, `users/${studentId}`));
        if (snap.exists() && snap.val().isLocked) {
            // NẾU BỊ KHÓA -> Bật thông báo và chặn chuyển trang
            toast.error("🔒 TÀI KHOẢN BỊ KHÓA: Bạn không thể làm đề thi lúc này. Vui lòng liên hệ Admin!", { autoClose: 5000 });
        } else {
            // NẾU BÌNH THƯỜNG -> Cho qua
            navigate(`/test-menu/${testId}`);
        }
    } catch (error) {
        toast.error("❌ Lỗi kiểm tra tài khoản: " + error.message);
    }
  };

  return (
    <div className="homepage-wrapper">
      <div className="hp-container">
        
        {/* HEADER */}
        <div className="hp-header">
          <div className="hp-title">
            <h1>IELTS PRACTICE TEST SYSTEM</h1>
          </div>
          <div className="hp-nav">
            <Link to="/dashboard" className="hp-link active">MOCK TEST</Link>
            <Link to="/writing-library" className="hp-link">WRITING</Link>
          </div>
        </div>

        {/* 👉 4. HIỂN THỊ DỮ LIỆU */}
        {loading ? (
          // Màn hình chờ khi đang kéo dữ liệu
          <div style={{ textAlign: 'center', padding: '50px', color: '#002554' }}>
            <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '2.5rem', marginBottom: '15px' }}></i>
            <h3 style={{ margin: 0 }}>Đang kết nối hệ thống...</h3>
            <p style={{ color: '#666' }}>Vui lòng chờ trong giây lát</p>
          </div>
        ) : (
          // Hiện lưới đề thi sau khi tải xong
          <div className="hp-grid">
            {tests.length > 0 ? (
              tests.map(test => (
                <div key={test.id} className="hp-card">
                  <h3>{test.testName}</h3>
                  <p className="hp-card-desc">{test.description}</p>
                  {/* 👉 ĐỔI LINK THÀNH BUTTON ĐỂ CHẶN TUYỆT ĐỐI */}
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
              // Báo lỗi nếu Firebase trống không
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px', background: 'white', borderRadius: '12px', border: '1px dashed #ccc' }}>
                <i className="fa-regular fa-folder-open" style={{ fontSize: '3rem', color: '#ccc', marginBottom: '15px' }}></i>
                <h3 style={{ margin: '0 0 10px 0', color: '#555' }}>Chưa có đề thi nào</h3>
                <p style={{ color: '#888' }}>Hiện tại chưa có bài thi nào được xuất bản trên hệ thống.</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
} 