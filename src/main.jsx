// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './App.css'

import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    // Khi phát hiện code mới trên server, ép buộc trình duyệt tự làm mới ngầm (hoặc hiển thị toast/alert nếu bạn muốn)
    // Gọi updateSW(true) sẽ tải lại code mới vào trình duyệt mà học viên không cần bấm Ctrl F5
    updateSW(true); 
  },
  onOfflineReady() {}
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    // Nếu phát hiện có bản cập nhật đã tải xong, tự động tải lại trang
    window.location.reload();
  });
}

if (window.location.hostname === 'beablevn-ielts.web.app') {
    // 1. Tiêu diệt Service Worker cũ đang lưu cache
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
            for (let registration of registrations) {
                registration.unregister();
            }
        });
    }
    // 2. Chuyển hướng học viên sang nhà mới mượt mà
    window.location.replace('https://beablevn-exam.web.app' + window.location.pathname);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)