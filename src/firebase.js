// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXXVDj3yGN0NMuZKEivZRYwBMQVK9egNE",
  authDomain: "disneyplushotstar-8935f.firebaseapp.com",
  projectId: "disneyplushotstar-8935f",
  storageBucket: "disneyplushotstar-8935f.appspot.com",
  messagingSenderId: "552615011027",
  appId: "1:552615011027:web:9668f91eed452596cfea26",
  measurementId: "G-YQ88EP18V7",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleprovider = new GoogleAuthProvider();

export { auth, db, googleprovider };
