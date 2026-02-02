// src/pages/TestMenuPage.jsx
import { useParams, Link } from 'react-router-dom';
import { allTests } from '../data/index';

export default function TestMenuPage() {
  const { testId } = useParams();
  const testData = allTests.find(t => t.id === testId);

  if (!testData) return <div className="container">❌ Không tìm thấy đề thi!</div>;

  return (
    <div className="container" style={{
        minHeight: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        padding: '20px'
    }}>
        
      <div style={{marginBottom: 30, textAlign: 'center'}}>
        <h1 style={{color: '#002554', fontSize: '2.2rem', margin: '0 0 10px 0', fontWeight: 800}}>
          {testData.testName}
        </h1>
        <p style={{color: '#666', margin: 0}}>Chọn kỹ năng bạn muốn thực hành</p>
      </div>

      <div className="test-menu-grid">
          
          {/* LISTENING */}
          <Link to={`/do-test/${testId}/listening`}>
            <div className="skill-card-hover">
                <div className="skill-card-icon">
                    <i className="fa-solid fa-headphones"></i>
                </div>
                {/* Gom Text và Nút vào chung 1 div để dễ căn chỉnh */}
                <div className="card-content-group">
                    <div className="skill-card-title">Listening</div>
                    <div className="skill-card-desc">
                        4 Parts • 40 Questions<br/>
                        Includes audio playback.
                    </div>
                    {/* Nút Start nằm ở đây */}
                    <div className="skill-card-btn">
                        Start Listening <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
          </Link>

          {/* READING */}
          <Link to={`/do-test/${testId}/reading`}>
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
                        Start Reading <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
          </Link>

          {/* WRITING */}
          <Link to={`/do-test/${testId}/writing`}>
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
                        Start Writing <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
          </Link>

      </div>
    </div>
  );
}