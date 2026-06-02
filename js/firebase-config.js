// Firebase Configuration
// Project: monitoring-92e1e
// PENTING: Jangan commit file ini ke repository publik.
// Gunakan Firebase Security Rules untuk membatasi akses data.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyALAqX1VvgcJN3q_MEp7iI29Oad7h9I_KM",
  authDomain: "monitoring-cb909.firebaseapp.com",
  databaseURL: "https://monitoring-cb909-default-rtdb.firebaseio.com",
  projectId: "monitoring-cb909",
  storageBucket: "monitoring-cb909.firebasestorage.app",
  messagingSenderId: "880044490443",
  appId: "1:880044490443:web:3bfd4eedfabdee9c03654e",
  measurementId: "G-BGLVRZEQ6N"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
