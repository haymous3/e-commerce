import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// import 'firebase/firestore';
// import 'firebase/auth';


const configuration = {
    apiKey: "AIzaSyDVJZtbrFiN1c3qCmyr3VSXRbZ2nlDBtCw",
    authDomain: "e-commerce-738e3.firebaseapp.com",
    projectId: "e-commerce-738e3",
    storageBucket: "e-commerce-738e3.appspot.com",
    messagingSenderId: "340511393719",
    appId: "1:340511393719:web:2e7b355747e69d9b930a32",
    measurementId: "G-CW6LJBFTNK"
};

const app = initializeApp(configuration)

export const auth = getAuth(app)

const provider = new GoogleAuthProvider();


provider.setCustomParameters({
    login: 'user@email.com'
})

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) =>{
        console.log(result)
    })
    .catch((error) =>{
        console.log(error)
    })
}

// export const signWithFacebook = () => {
//     signInWithPopup(auth, facebook).then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }
// firebase.initializeApp(configuration);

// export const auth = firebase.auth();
// export const firestore = firebase.firebase();

// const provider = new firebase.auth.GoogleAuthProvider();

// provider.setCustomPrementers({prompt: 'select_account'});

// export const signInWithGoogle = auth.signInWithPopup(provider);

// export default firebase;

// import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

// const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // The signed-in user info.
//     const user = result.user;

//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     const credential = FacebookAuthProvider.credentialFromResult(result);
//     const accessToken = credential.accessToken;

//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = FacebookAuthProvider.credentialFromError(error);

//     // ...
//   });