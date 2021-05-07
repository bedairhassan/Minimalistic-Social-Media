import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA2cWJmERSPGPixbUB1QSjkZKkcAXSiapE",
    authDomain: "facebook-9cc04.firebaseapp.com",
    projectId: "facebook-9cc04",
    storageBucket: "facebook-9cc04.appspot.com",
    messagingSenderId: "542807902668",
    appId: "1:542807902668:web:cd2a0d2b9b602ee3243569"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()