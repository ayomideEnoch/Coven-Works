import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCwHwxlkbBfcO4nUHpIRVSNQrI9_7X7Los",
  authDomain: "login-a96e5.firebaseapp.com",
  projectId: "login-a96e5",
  storageBucket: "login-a96e5.appspot.com",
  messagingSenderId: "104706594874",
  appId: "1:104706594874:web:19321af02748733a04fd03"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
