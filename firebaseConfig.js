import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtPAh7C2UpK35_Q-4fp_BeaZDEPU9zVFk",
  authDomain: "wellmoria-e6ea0.firebaseapp.com",
  projectId: "wellmoria-e6ea0",
  storageBucket: "wellmoria-e6ea0.firebasestorage.app",
  messagingSenderId: "1036767584876",
  appId: "1:1036767584876:web:487afd9fbc7cf49e92ae49",
  measurementId: "G-3L5QVC2E9R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };