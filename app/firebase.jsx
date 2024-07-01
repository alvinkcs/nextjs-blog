// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY-cbYVmPyD7ZdDKNYTNNDFv-9BdhFnxY",
  authDomain: "alvinforfun.firebaseapp.com",
  projectId: "alvinforfun",
  storageBucket: "alvinforfun.appspot.com",
  messagingSenderId: "357595656922",
  appId: "1:357595656922:web:5c2243e84fcc5cb96e6be3",
  measurementId: "G-PQ1YE6C65Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app