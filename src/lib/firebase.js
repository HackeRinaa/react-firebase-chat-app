import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-6e52e.firebaseapp.com",
  projectId: "chat-6e52e",
  storageBucket: "chat-6e52e.firebasestorage.app",
  messagingSenderId: "694591148310",
  appId: "1:694591148310:web:979556556862b00b9fc037",
  measurementId: "G-7MX03D0TYJ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();