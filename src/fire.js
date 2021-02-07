import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDP0gwWtm8EqiJBoa-OyCRAY0oFxAJVrSE",
  authDomain: "coven-works-ab21e.firebaseapp.com",
  projectId: "coven-works-ab21e",
  storageBucket: "coven-works-ab21e.appspot.com",
  messagingSenderId: "69801714204",
  appId: "1:69801714204:web:9ad32f183cc935e19fb5d9",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;