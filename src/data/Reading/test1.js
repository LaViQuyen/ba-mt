export const readingTest1 = {
  id: "reading_t1",
  testName: "Reading Test 1: The History of Glass",
  // Nội dung bài đọc (HTML)
  passage: `
    <div class="reading-text">
      <h3>The History of Glass</h3>
      <p>From our earliest origins, man has been making use of glass...</p>
      ... (Dán nội dung bài đọc dài vào đây) ...
    </div>
  `,
  questions: [
    {
      type: "gap",
      title: "Questions 1-5",
      instruction: "Complete the notes below.",
      htmlContent: `... <input class="gap-input" data-qnum="1" /> ...`, // Giống hệt Listening
      items: [{ qNum: 1, answer: "sand" }] 
    }
  ]
};