import firebase from 'firebase/compat/app';
import { 
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC-m2hd_cN5ZUMBkC-zIedDcHjyrUyq1bI",
    authDomain: "crwn-clothing-db-a4c40.firebaseapp.com",
    projectId: "crwn-clothing-db-a4c40",
    storageBucket: "crwn-clothing-db-a4c40.appspot.com",
    messagingSenderId: "177304612362",
    appId: "1:177304612362:web:79522f1ef35ad2449539f3",
    measurementId: "G-49PS2G77JR"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// console.log(firebaseApp)
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) {
        return;
    }
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef);
    
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName,email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log(error.message);
        }
        
    }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        return ;
    }
    
    return await createUserWithEmailAndPassword(auth,email,password)
};