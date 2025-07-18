import { clsx, type ClassValue } from "clsx"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const firebaseConfig = {
  apiKey: "AIzaSyCCIDsHPCx7oteh6ae4kbQZFVKN9xXtwfo", // we'll update and make this private later
  authDomain: "f1-dashboard-90667.firebaseapp.com",
  projectId: "f1-dashboard-90667",
  storageBucket: "f1-dashboard-90667.firebasestorage.app",
  messagingSenderId: "139547654443",
  appId: "1:139547654443:web:690e9bf3f41a6eb4786d6e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
