import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDup9YMZgNu68G4oGF_aYgbSUV-rBf5p9w",
  authDomain: "crwn-clothing-db-818ad.firebaseapp.com",
  projectId: "crwn-clothing-db-818ad",
  storageBucket: "crwn-clothing-db-818ad.appspot.com",
  messagingSenderId: "945707970633",
  appId: "1:945707970633:web:3594c2c812c8640d7ccf98",
};

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

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user: ", error.message);
    }
  }

  return userDocRef;
};

/**
 * 2-explain the code
 */
