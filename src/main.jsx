import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StatsValueProvider } from './Context/StatsContext.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo4MsSeHF9Ra6F9xX8G8glWiVMDxeuWhY",
  authDomain: "trackweed-b35b3.firebaseapp.com",
  projectId: "trackweed-b35b3",
  storageBucket: "trackweed-b35b3.appspot.com",
  messagingSenderId: "425787545489",
  appId: "1:425787545489:web:5ac93a11c9f8958e162c30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StatsValueProvider>
      <App />
    </StatsValueProvider>
  </React.StrictMode>
)
