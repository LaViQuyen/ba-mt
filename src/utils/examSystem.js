// src/utils/examSystem.js
// Doc quyen truy cap he thi (IELTS/SAT/Both) cua hoc vien tu Firebase.
// Doc lai moi lan (khong cache) de admin doi quyen giua chung co hieu luc ngay,
// giong pattern kiem tra isLocked trong HomePage.jsx.
import { ref, get, child } from "firebase/database";
import { db } from "../firebase";

// Tra ve 'ielts' | 'sat' | 'both'. Guest (chua dang nhap that) duoc coi nhu 'both'.
export async function fetchAllowedExamSystem(studentId) {
  if (!studentId || studentId === "Guest") return "both";
  const snap = await get(child(ref(db), `users/${studentId}`));
  if (!snap.exists()) return "both";
  const val = snap.val().examSystem;
  return ["ielts", "sat", "both"].includes(val) ? val : "both";
}

export function canAccessSystem(examSystem, target) {
  return examSystem === "both" || examSystem === target;
}
