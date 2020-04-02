const firebaseConfig = {
  apiKey: "AIzaSyBAnIrbdeQLbwO3MY7lyD_75HfKJH12-pA",
  authDomain: "user-crud-a48d3.firebaseapp.com",
  databaseURL: "https://user-crud-a48d3.firebaseio.com",
  projectId: "user-crud-a48d3",
  storageBucket: "user-crud-a48d3.appspot.com",
  messagingSenderId: "78474489693",
  appId: "1:78474489693:web:af9d0ca257a501437282b4"
};
firebase.initializeApp(firebaseConfig);

export const firebaseDB = firebase.firestore();