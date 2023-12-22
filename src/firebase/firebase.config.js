// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBCFsAs47Kvy4kt7WPVTzNDa45R-qEDg4",
  authDomain: "task-management-site.firebaseapp.com",
  projectId: "task-management-site",
  storageBucket: "task-management-site.appspot.com",
  messagingSenderId: "1054961751924",
  appId: "1:1054961751924:web:04badd7ab9bcd53420be21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;