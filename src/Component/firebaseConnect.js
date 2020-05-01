import  * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyBQwi6FYNxgm7mCyqE2VIfl4zWciS16UH8",
  authDomain: "appnote-8f031.firebaseapp.com",
  databaseURL: "https://appnote-8f031.firebaseio.com",
  projectId: "appnote-8f031",
  storageBucket: "appnote-8f031.appspot.com",
  messagingSenderId: "1005990270269",
  appId: "1:1005990270269:web:4e903bdcc652dab95e2154",
  measurementId: "G-25KX8RT3LS"
};
firebase.initializeApp(firebaseConfig);
export const firebaseConnect = firebase.database().ref("DataNote/");


// data.set({
//   id : 0,
//   title : "Kinh Te",
//   content : "Hoc Bu 7 Ngay Sau Dai Dich Corona"
// })
