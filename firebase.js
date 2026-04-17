import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCENmDR7KuVvKgQpsDUcoDq0BRglisMqJs",
  authDomain: "management-7576c.firebaseapp.com",
  projectId: "management-7576c",
  storageBucket: "management-7576c.firebasestorage.app",
  messagingSenderId: "1054683564424",
  appId: "1:1054683564424:web:4f7f1e7fb568b5d2ca123d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);   // ✅ ADD THIS

export { auth, db };            // ✅ EXPORT db ALSO