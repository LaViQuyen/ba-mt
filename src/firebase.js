// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
// 1. THÊM DÒNG NÀY (Để dùng Database)
import { getDatabase } from "firebase/database";

// ⚠️ QUAN TRỌNG: Bạn phải thay đoạn bên dưới bằng Config của bạn
// (Vào Firebase Console -> Project Settings -> General -> Kéo xuống dưới cùng để copy)
const firebaseConfig = {
  apiKey: "AIzaSyB-H2c03cUr-o0Iog5jat5grn_JmBfc-ZA",
  authDomain: "ba-ie-mt.firebaseapp.com",
  databaseURL: "https://ba-ie-mt-default-rtdb.firebaseio.com",
  projectId: "ba-ie-mt",
  storageBucket: "ba-ie-mt.firebasestorage.app",
  messagingSenderId: "550707314499",
  appId: "1:550707314499:web:38e0d939d99eaa264239f6",
  measurementId: "G-H825TZ7153"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Functions (Giữ nguyên)
export const functions = getFunctions(app);

// 2. THÊM DÒNG NÀY (Để xuất Database ra cho App dùng)
export const db = getDatabase(app);

// ⚠️ CHÚ Ý: Dòng này của bạn rất quan trọng để chạy thử trên máy tính
// Đừng xóa nó nếu bạn vẫn đang test AI trên localhost
// connectFunctionsEmulator(functions, "localhost", 5001); 
// (Nếu bạn đang bật comment dòng trên thì cứ để nguyên, nếu đang mở thì giữ mở)
// Trong ảnh bạn gửi thì dòng này đang mở, nên mình để mở luôn:
// connectFunctionsEmulator(functions, "localhost", 5001);