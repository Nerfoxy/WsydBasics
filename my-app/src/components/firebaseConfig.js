
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export  const firebaseConfig = {
  apiKey: "AIzaSyCBP4CGfwN9-Qgh4x1f0PJUbEVIvx5celA",
  authDomain: "wsyd-almaproud.firebaseapp.com",
  databaseURL: "https://wsyd-almaproud-default-rtdb.firebaseio.com",
  projectId: "wsyd-almaproud",
  storageBucket: "wsyd-almaproud.appspot.com",
  messagingSenderId: "628088553117",
  appId: "1:628088553117:web:c67d4bba41ca0074c5de74",
  measurementId: "G-1JMYY8D12V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);