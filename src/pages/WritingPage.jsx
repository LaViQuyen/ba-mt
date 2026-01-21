import { useState } from 'react';

function WritingPage() {
  const [essay, setEssay] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGrade = async () => {
    setLoading(true);
    try {
      // Gọi Firebase Function
      const response = await fetch('/api/grade', { // Lưu ý: Cần config proxy hoặc dùng URL đầy đủ
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            systemPrompt: "You are an IELTS Examiner...",
            userContent: essay,
            modelName: "gemini-1.5-flash"
        })
      });
      const data = await response.json();
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>IELTS Writing Task</h2>
      <textarea 
        rows="15" 
        style={{ width: '100%', padding: '10px' }}
        value={essay}
        onChange={(e) => setEssay(e.target.value)}
        placeholder="Type your essay here..."
      />
      <button onClick={handleGrade} disabled={loading} style={{ marginTop: '10px' }}>
        {loading ? "AI is Grading..." : "Submit for Grading"}
      </button>

      {/* Hiển thị kết quả AI chấm */}
      {result && (
        <div style={{ background: '#f0f0f0', padding: '20px', marginTop: '20px' }}>
           {/* Render kết quả JSON từ AI ra đây */}
           <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default WritingPage;