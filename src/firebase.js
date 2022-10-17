import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyATI6aaOtx_LWOTgRgiH7iyXCxY_BriyAM',
  authDomain: 'disneyplus-clone-8dfd6.firebaseapp.com',
  // databaseURL: 'https://disneyplus-clone-8dfd6-default-rtdb.firebaseio.com',
  projectId: 'disneyplus-clone-8dfd6',
  storageBucket: 'disneyplus-clone-8dfd6.appspot.com',
  messagingSenderId: '448645260288',
  appId: '1:448645260288:web:fa35e93f9583a79316e4e5',
  measurementId: 'G-H3JLJL00S7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
