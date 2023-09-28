import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {

    apiKey: "AIzaSyDS5WxFJihesW0eksEzmJUN90lnl2A_Csg",
  
    authDomain: "olx-clone-c7720.firebaseapp.com",
  
    projectId: "olx-clone-c7720",
  
    storageBucket: "olx-clone-c7720.appspot.com",
  
    messagingSenderId: "112389167095",
  
    appId: "1:112389167095:web:f357fb2992c53ac4c780f2",
  
    measurementId: "G-XCQMKRQE36"
  
  };

 export default firebase.initializeApp(firebaseConfig)