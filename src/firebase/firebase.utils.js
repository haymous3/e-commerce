import { initializeApp } from 'firebase/app';
import {  getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// import { getDatabase } from 'firebase/database';

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


const app = initializeApp(configuration);

export const db = getFirestore(app)

export const auth = getAuth(app)


const provider = new GoogleAuthProvider();


export const createUserProfile = async ( userAuth, otherItems) => {

    

        const docRef =  getDoc(doc(db, "users", `${userAuth.uid}`));


        if(!userAuth)return;

        const { displayName, email } = userAuth; 
        const created = new Date()

    
        await setDoc(doc(db, "users", `${userAuth.uid}`), {
            name:displayName,
            emails: email,
            createdAt: created,
            ...otherItems
        }); 

    
        return docRef
}


provider.setCustomParameters({
    login: 'user@email.com'
})

export const signInWithGoogle = () => {

    signInWithPopup(auth, provider).then((result) => {
        const profile = result.user.photoURL;

        localStorage.setItem('picture', profile)
    });
};




    





