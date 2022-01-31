import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut, signInWithRedirect, signInWithPopup ,onAuthStateChanged} from "firebase/auth";
import { getFirestore,getDocs,collection,addDoc,deleteDoc ,doc,updateDoc} from "firebase/firestore"
// import 'bootstrap/dist/css/bootstrap.min.css';
import firebaseInfo from '../json/firebase.json'; 
const firebaseConfig = firebaseInfo;

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore();

export const FB_AUTH = {
  signOut: () => {
    signOut(auth)
  },
  signInWithGoogle: (isPop = false) => {
    isPop ? signInWithPopup(auth, provider) : signInWithRedirect(auth, provider);
  },
  authChange:(callbackFun)=>{
    onAuthStateChanged(auth, typeof callbackFun === 'function' ? callbackFun:null);
  }
}

export const FB_DB = {
  get: async (name)=>{
    let res = [];
    const data = await getDocs(collection(db, name));
    data.forEach(v=>res.push({id:v.id,...v.data()}))
    return res;
  },
  add:(name,obj,callback)=>{
    addDoc(collection(db,name),obj).then((res)=>{
      if(typeof callback === 'function')
      callback(res.id);
    });
  },
  delete:(name,id)=>{
    deleteDoc(doc(db,name,id));
  },
  update:(name,id,data,callback)=>{
    updateDoc(doc(db, name, id),data).then(()=>{
      alert('수정이 완료되었습니다.')
      if(typeof callback === 'function')
      callback();
    });
  }
}