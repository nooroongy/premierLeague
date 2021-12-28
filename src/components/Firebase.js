import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// import 'bootstrap/dist/css/bootstrap.min.css';
import firebaseInfo from '../json/firebase.json'; 
const firebaseConfig = firebaseInfo;
const app = initializeApp(firebaseConfig);

const Firebase = () => {
    debugger
}

export const database = getFirestore(app);
export default Firebase;