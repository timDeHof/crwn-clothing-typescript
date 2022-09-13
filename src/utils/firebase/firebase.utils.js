import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA6FL0zFnzTrblEKG2f_DvztinW3_4JUy4",
  authDomain: "crwn-clothing-db-1749a.firebaseapp.com",
  projectId: "crwn-clothing-db-1749a",
  storageBucket: "crwn-clothing-db-1749a.appspot.com",
  messagingSenderId: "482416103370",
  appId: "1:482416103370:web:cca4767783a19e01864933",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // if user data doesn't exists
    // creeate the / set the documnent with the data from userAuth in my collection
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("eror creating the user", error.message);
    }
  }
  // if user data exists
  // retunr userDocRef
  return userDocRef;
};
