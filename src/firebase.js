import firebase from 'firebase'

const firebaseConfig= {

    apiKey: "AIzaSyCSraJSGmGskYkC3B7lIjgNGswTCeAu6fY",
    authDomain: "netflix-build-baec8.firebaseapp.com",
    projectId: "netflix-build-baec8",
    storageBucket: "netflix-build-baec8.appspot.com",
    messagingSenderId: "697434790468",
    appId: "1:697434790468:web:186b7ec05fe629e37d3a11",
    measurementId: "G-E1F1J783CC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth};
export default db;