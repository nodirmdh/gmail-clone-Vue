import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDBY9UCHWw1mk14URMQGs6AXTGLZ599D1U",
  authDomain: "clone-be5aa.firebaseapp.com",
  projectId: "clone-be5aa",
  storageBucket: "clone-be5aa.appspot.com",
  messagingSenderId: "70760603356",
  appId: "1:70760603356:web:306dccadf2f308422b1e19"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}