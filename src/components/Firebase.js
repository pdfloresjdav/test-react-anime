import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBN4r5d3juu0ijYHeEHN0SbYtZhdFzEmQc",
    authDomain: "testreact-32ab0.firebaseapp.com",
    projectId: "testreact-32ab0",
    storageBucket: "testreact-32ab0.appspot.com",
    messagingSenderId: "893633976083",
    appId: "1:893633976083:web:45e8a74782b50ad5a1ece6",
    measurementId: "G-KBCNV501HN"
  };
  
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  export const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
export const SignInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    console.log(result);
  }).catch((error)=>{
    console.log(error);
  });
}


const provider1 = new FacebookAuthProvider();
provider1.addScope('user_birthday');
export const SignInWithFacebook = () => {
signInWithPopup(auth, provider1)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    console.log(accessToken);
    console.log(user);

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    console.log(error);

    // ...
  })};

  const provider2 = new TwitterAuthProvider();
  export const SignInWithTwitter = () => {
  signInWithPopup(auth, provider2)
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;

    // The signed-in user info.
    const user = result.user;
    console.log(user);
    console.log(token);
    console.log(secret);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    console.log(error);
    // ...
  })};

  export const CreateNative = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      console.log(error);
      // ..
    })};
  export const SignInNative = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    console.log(error);
  })};