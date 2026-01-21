import { useState } from 'react';
// Import data reading...

function ReadingPage() {
  // Logic xử lý input và check đáp án giống hệt Listening
  return (
     <div className="flex-container">
        <div className="left-column"> { /* Hiển thị passage */ } </div>
        <div className="right-column"> { /* Hiển thị câu hỏi */ } </div>
     </div>
  )
}
export default ReadingPage;