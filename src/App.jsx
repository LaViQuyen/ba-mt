import { Routes, Route, Link } from 'react-router-dom';
import ListeningPage from './pages/ListeningPage';
import ReadingPage from './pages/ReadingPage';
import WritingPage from './pages/WritingPage';

function App() {
  return (
    <div>
      {/* MENU ĐIỀU HƯỚNG */}
      <nav style={{ padding: '20px', background: '#002554', color: 'white', textAlign: 'center' }}>
        <Link to="/" style={{ color: 'white', marginRight: '20px' }}>HOME</Link>
        <Link to="/listening" style={{ color: 'white', marginRight: '20px' }}>LISTENING</Link>
        <Link to="/reading" style={{ color: 'white', marginRight: '20px' }}>READING</Link>
        <Link to="/writing" style={{ color: 'white' }}>WRITING</Link>
      </nav>

      {/* KHU VỰC HIỂN THỊ NỘI DUNG TƯƠNG ỨNG */}
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<h1 style={{textAlign:'center'}}>Welcome to IELTS Simulator</h1>} />
          <Route path="/listening" element={<ListeningPage />} />
          <Route path="/reading" element={<ReadingPage />} />
          <Route path="/writing" element={<WritingPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;