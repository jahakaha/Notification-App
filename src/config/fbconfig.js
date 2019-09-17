import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCEw4ypr6E1lxAytZIGr0_7vAyfCHxL_2w",
    authDomain: "jaxreminderproject.firebaseapp.com",
    databaseURL: "https://jaxreminderproject.firebaseio.com",
    projectId: "jaxreminderproject",
    storageBucket: "",
    messagingSenderId: "916041828103",
    appId: "1:916041828103:web:dc4a13d1d2e44ba7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);   
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;