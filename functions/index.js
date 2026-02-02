// // functions/index.js
// const { onCall, HttpsError } = require("firebase-functions/v2/https");
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // KHAI BÁO API KEY GEMINI CỦA BẠN Ở ĐÂY (Hoặc dùng defineSecret tốt hơn)
// const GEN_AI_KEY = "Dán_API_Key_Gemini_Của_Bạn_Vào_Đây"; 
// const genAI = new GoogleGenerativeAI(GEN_AI_KEY);

// exports.gradeWriting = onCall({ cors: true }, async (request) => {
//   const { taskType, essayContent } = request.data;

//   if (!essayContent) {
//     throw new HttpsError('invalid-argument', 'Nội dung bài viết trống.');
//   }

//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   const prompt = `
//     You are an IELTS Examiner. Grade this ${taskType} essay based on official band descriptors.
//     Essay: "${essayContent}"
    
//     Response format (Strict JSON only, no markdown code blocks):
//     {
//       "band_score": 6.5,
//       "overall_comment": "Brief summary...",
//       "detailed_feedback": {
//          "TR_TA": "...",
//          "CC": "...",
//          "LR": "...",
//          "GRA": "..."
//       },
//       "correction": "Corrected version or suggestion..."
//     }
//   `;

//   try {
//     const result = await model.generateContent(prompt);
//     const response = result.response;
//     let text = response.text();
    
//     // Làm sạch JSON nếu AI trả về dính dấu ```json
//     text = text.replace(/```json/g, "").replace(/```/g, "").trim();
    
//     const jsonResult = JSON.parse(text);
    
//     return {
//       success: true,
//       data: jsonResult
//     };
//   } catch (error) {
//     console.error("AI Error:", error);
//     return {
//       success: false,
//       message: error.message
//     };
//   }
// });