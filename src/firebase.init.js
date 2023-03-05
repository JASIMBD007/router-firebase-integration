// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMU0NaTMQfUtR4DzrO4dwJ00AP9fk9wQs",
    authDomain: "router-firebase-integrat-6e65e.firebaseapp.com",
    projectId: "router-firebase-integrat-6e65e",
    storageBucket: "router-firebase-integrat-6e65e.appspot.com",
    messagingSenderId: "205763932354",
    appId: "1:205763932354:web:3a1997fdb87d87e609cb5b",
    measurementId: "G-GBY16WZ4Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;