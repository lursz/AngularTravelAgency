// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyD5QhAucNRudnqHhbn-f9Yy3c7ObLGPlic",
        authDomain: "travelagency-fa39e.firebaseapp.com",
        projectId: "travelagency-fa39e",
        storageBucket: "travelagency-fa39e.appspot.com",
        messagingSenderId: "730982599607",
        appId: "1:730982599607:web:7b44845eeeaf1d6e2ab632",
        measurementId: "G-KS4Q4C02F3"
    }
}

// const firebaseConfig = {
//   apiKey: "AIzaSyD5QhAucNRudnqHhbn-f9Yy3c7ObLGPlic",
//   authDomain: "travelagency-fa39e.firebaseapp.com",
//   projectId: "travelagency-fa39e",
//   storageBucket: "travelagency-fa39e.appspot.com",
//   messagingSenderId: "730982599607",
//   appId: "1:730982599607:web:7b44845eeeaf1d6e2ab632",
//   measurementId: "G-KS4Q4C02F3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);