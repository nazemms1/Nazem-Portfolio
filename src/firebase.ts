import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDtEURQoVPnOhxpPk9y2Oo3pNZBmRr4TQc",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "active-cosine-423408-m6.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "active-cosine-423408-m6",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "active-cosine-423408-m6.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "932923919925",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:932923919925:web:6dd5afcc8baaa3e45f2b7c",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-7YP5NRP0FE"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Analytics standard initialization with runtime check
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, auth, db, storage, analytics };
