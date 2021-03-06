// firebase configuration
import firebase from 'firebase';
// import firestore from 'firebase/firestore';
const firebaseConfig = {
    apiKey: 'AIzaSyB-LM9YNXFM_wHUwIzKWfKBEgrKhw2AfEQ',
    authDomain: 'course-guidez.firebaseapp.com',
    databaseURL: 'https://course-guidez.firebaseio.com',
    projectId: 'course-guidez',
    storageBucket: 'course-guidez.appspot.com',
    messagingSenderId: '613581253386',
    appId: '1:613581253386:web:ceaff75fa4f266b075a8f3',
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const providers = [
    new firebase.auth.GoogleAuthProvider(),
    new firebase.auth.GithubAuthProvider(),
    new firebase.auth.TwitterAuthProvider(),
];

export const [googleProvider, githubProvider, twitterProvider] = providers;