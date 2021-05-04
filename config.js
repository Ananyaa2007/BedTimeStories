import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAGyMNLseOFoNBmNsgpa-dKpbzHK8HFeaU",
  authDomain: "story-hub-649b9.firebaseapp.com",
  projectId: "story-hub-649b9",
  storageBucket: "story-hub-649b9.appspot.com",
  databaseURL: "https://story-hub-649b9-default-rtdb.firebaseio.com",
  messagingSenderId: "341862905000",
  appId: "1:341862905000:web:9ed688df8a1f8890c5be9d"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore()