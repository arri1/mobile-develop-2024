import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBHDmamsGLu3MZ6wjv0bOUCkwpifXsCFEw",
  authDomain: "todo-app-d4dde.firebaseapp.com",
  projectId: "todo-app-d4dde",
  storageBucket: "todo-app-d4dde.firebasestorage.app",
  messagingSenderId: "357769033587",
  appId: "1:357769033587:web:154b9c923a37eb9a6f3706"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)