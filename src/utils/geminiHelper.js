import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEYS = [
    import.meta.env.VITE_GEMINI_API_KEY_1,
    import.meta.env.VITE_GEMINI_API_KEY_2,
    import.meta.env.VITE_GEMINI_API_KEY_3,
].filter(key => key);

const MODEL_NAME = "gemini-2.5-flash"; 

let currentKeyIndex = 0; 

export const generateContentWithRotation = async (promptText) => {
    if (API_KEYS.length === 0) {
        throw new Error("Không tìm thấy API Key!");
    }

    let lastError = null;
    let attempts = 0; 

    while (attempts < API_KEYS.length) {
        const currentKey = API_KEYS[currentKeyIndex];
        currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
        attempts++;

        try {
            const genAI = new GoogleGenerativeAI(currentKey);
            
            const model = genAI.getGenerativeModel(
                { model: MODEL_NAME },
                { apiVersion: "v1" } 
            );

            const result = await model.generateContent(promptText);
            return result.response.text(); 

        } catch (error) {
            console.warn(`⚠️ Key thứ ${attempts} bị lỗi:`, error.message);
            lastError = error;
            
            if (error.message.includes('429') || error.message.includes('503')) {
                continue; 
            } else {
                throw new Error(`Lỗi từ Google: ${error.message}`);
            }
        }
    }

    // 👇 Phân loại lỗi rõ ràng để không bị nhầm lẫn nữa 👇
    if (lastError?.message?.includes('503')) {
        throw new Error("Server Google đang quá tải (High demand). Vui lòng thử lại sau vài phút!");
    } else if (lastError?.message?.includes('429')) {
        throw new Error("Đã hết hạn mức sử dụng (Quota Exceeded) cho tất cả các Key!");
    } else {
        throw new Error(`Lỗi hệ thống: ${lastError?.message}`);
    }
};