import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCeXELhX9B0GVulwER0cE2Mm35qk5B3E2k",
  authDomain: "reactblog-c2913.firebaseapp.com",
  databaseURL: "https://reactblog-c2913.firebaseio.com",
  projectId: "reactblog-c2913",
  storageBucket: "reactblog-c2913.appspot.com",
  messagingSenderId: "526135566440",
  appId: "1:526135566440:web:8157ad7178e5283ffd1bdd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({timestampInSnapshot:true});
export default firebase;

// export const auth=firebase.auth();
// export const storage=firebase.storage();
// export const db=firebase.firestore();
