import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8kGrQTE1bP0wENcORgCy8qSe8bQOJVbo",
  authDomain: "codeeditor-20ab6.firebaseapp.com",
  projectId: "codeeditor-20ab6",
  storageBucket: "codeeditor-20ab6.appspot.com",
  messagingSenderId: "908659954337",
  appId: "1:908659954337:web:39511435e15815b5b3d6e0",
  measurementId: "G-SQXG872VZG",
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
