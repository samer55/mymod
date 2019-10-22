// import and configure firebase
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCSsegknJobnivJBSJ2lH0-yliRTpmNcT4",
     authDomain: "modares-1368e.firebaseapp.com",
     databaseURL: "https://modares-1368e.firebaseio.com",
     projectId: "modares-1368e",
     storageBucket: "modares-1368e.appspot.com",
     messagingSenderId: "703557668962",
     appId: "1:703557668962:web:cf9eacb91546c291c7013b"
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
