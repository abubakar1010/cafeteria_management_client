// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfGylBrsbByp55hd0zuUWT7ouD646EDNI",
  authDomain: "cafeteria-management-ad6db.firebaseapp.com",
  projectId: "cafeteria-management-ad6db",
  storageBucket: "cafeteria-management-ad6db.appspot.com",
  messagingSenderId: "190786612709",
  appId: "1:190786612709:web:44a9c8f7f425747d9e130c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth