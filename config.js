import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCjGVz68cO88_zg99s4-DXgBC6rrAXAHMk",
    authDomain: "wily-app-f7e27.firebaseapp.com",
    projectId: "wily-app-f7e27",
    storageBucket: "wily-app-f7e27.appspot.com",
    messagingSenderId: "98876742560",
    appId: "1:98876742560:web:718dca466a6575824362c5"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();