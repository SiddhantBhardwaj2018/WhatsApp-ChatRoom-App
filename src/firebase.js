import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBH0SM3HR7rCTgzK4AiCSH4h18V3q3bR9I",
    authDomain: "whatsapp-clone-bbde8.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-bbde8.firebaseio.com",
    projectId: "whatsapp-clone-bbde8",
    storageBucket: "whatsapp-clone-bbde8.appspot.com",
    messagingSenderId: "722056164657",
    appId: "1:722056164657:web:7a2dbeacb58cbdd2476c10",
    measurementId: "G-DH7VWF4GC0"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db
