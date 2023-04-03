
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyAJ4EltY-URPMiddrGLV6uvQyn6vnSUTDw",
  authDomain: "tiktok---jornada-d6720.firebaseapp.com",
  projectId: "tiktok---jornada-d6720",
  storageBucket: "tiktok---jornada-d6720.appspot.com",
  messagingSenderId: "654486607621",
  appId: "1:654486607621:web:173c76a1a8b44a2f61096c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;