import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBaOjMI0FvEPn-imTp38zt12Uqcp1MDzN8",
  authDomain: "e-ride-604cc.firebaseapp.com",
  projectId: "e-ride-604cc",
  storageBucket: "e-ride-604cc.appspot.com",
  messagingSenderId: "260634436051",
  appId: "1:260634436051:web:7d653425fb1c089a66cf26"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
