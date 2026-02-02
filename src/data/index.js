// src/data/index.js

// 1. Import các file đề thi
import { cam20_test1 } from './fullmt/cam20_test1';
import { cam20_test2 } from './fullmt/cam20_test2'; // 👈 THÊM DÒNG NÀY
import { cam20_test3 } from './fullmt/cam20_test3';
import { cam20_test4 } from './fullmt/cam20_test4';
import { cam19_test1 } from './fullmt/cam19_test1';
import { cam19_test2 } from './fullmt/cam19_test2';
import { cam19_test3 } from './fullmt/cam19_test3';
// 2. Thêm vào mảng danh sách tổng
export const allTests = [
  cam20_test1,
  cam20_test2, // 👈 THÊM DÒNG NÀY (Nhớ dấu phẩy)
  cam20_test3,
  cam20_test4,
  cam19_test1,
  cam19_test2,
  cam19_test3,
];