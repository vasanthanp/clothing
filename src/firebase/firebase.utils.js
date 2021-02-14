import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'
const config = {
    apiKey: "AIzaSyDVIv8FTEn-xJ0dqjwNM0wHLvj8wywoQY0",
    authDomain: "clothing-47be2.firebaseapp.com",
    databaseURL: "https://clothing-47be2.firebaseio.com",
    projectId: "clothing-47be2",
    storageBucket: "clothing-47be2.appspot.com",
    messagingSenderId: "170974333050",
    appId: "1:170974333050:web:73dbddfa18a16a3e9993c3",
    measurementId: "G-LFK277M7DJ"
  };
  export const  createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return ;
    const userRef = fireStore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try{
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
      }catch(error){
        console.log('....error',error.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config)
  export const auth = firebase.auth();
  export const fireStore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  export default firebase