// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCf2ZYN8Cw6j3ogb-_Lrhmx54lcTvsS7o",
  authDomain: "e-clothing-41025.firebaseapp.com",
  databaseURL: "https://e-clothing-41025.firebaseio.com",
  projectId: "e-clothing-41025",
  storageBucket: "",
  messagingSenderId: "771374338444",
  appId: "1:771374338444:web:2d6445dfa97975b3"
};

export const createUserDocumentInFireStore = async (userAuth, additionalData) =>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`); //getting user refernce
  // let docRef = db.collection('users').doc('alovelace');
  const snapShot = await userRef.get();//getting snapshot to check weather it exists in firestore or not
  // console.log(snapShot);
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({//adding user to firbase document which is present in collection
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(error.message);
    }
  }   return userRef;
  
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//authentication with google
const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({prompt:'select_account'}); //optional

// export const SignInWithGoogle = firebase.auth().signInWithPopup(provider);
export const SignInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;