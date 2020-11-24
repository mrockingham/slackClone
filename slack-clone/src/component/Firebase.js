import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCrU8xUnSkoK_wuDKm9MM-YVSJLbnr9wsU",
    authDomain: "slack-clone-5d2ef.firebaseapp.com",
    databaseURL: "https://slack-clone-5d2ef.firebaseio.com",
    projectId: "slack-clone-5d2ef",
    storageBucket: "slack-clone-5d2ef.appspot.com",
    messagingSenderId: "590932486412",
    appId: "1:590932486412:web:2ee16a658deffe75648129",
    measurementId: "G-49ZFJSRBX7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()

  const auth = firebase.auth()
 
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider}
  export default db;