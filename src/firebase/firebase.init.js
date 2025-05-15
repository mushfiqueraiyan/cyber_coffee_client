import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMGb7guwl6rs7lysbppCT9RXfS34C7oqA",
  authDomain: "cyber-coffee-6dcb2.firebaseapp.com",
  projectId: "cyber-coffee-6dcb2",
  storageBucket: "cyber-coffee-6dcb2.firebasestorage.app",
  messagingSenderId: "355953551555",
  appId: "1:355953551555:web:c0e21164fd4525ff66da76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
