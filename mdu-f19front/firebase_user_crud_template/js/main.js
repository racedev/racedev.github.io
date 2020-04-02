"use strict";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAnIrbdeQLbwO3MY7lyD_75HfKJH12-pA",
  authDomain: "user-crud-a48d3.firebaseapp.com",
  databaseURL: "https://user-crud-a48d3.firebaseio.com",
  projectId: "user-crud-a48d3",
  storageBucket: "user-crud-a48d3.appspot.com",
  messagingSenderId: "78474489693",
  appId: "1:78474489693:web:af9d0ca257a501437282b4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const userRef = db.collection("users");

let selectedUserId = "";

// ========== READ ==========
// watch the database ref for changes
userRef.onSnapshot(function(snapshotData) {
  let users = [];
  snapshotData.forEach(function(doc) {
    let user = doc.data();
    console.log(user);
    user.id = doc.id;
    users.push(user);
  });
  appendUsers(users);
});

// append users to the DOM
function appendUsers(users) {
  console.log(users);
}

// ========== CREATE ==========
// add a new user to firestore (database)
function createUser() {

}

// ========== UPDATE ==========

function selectUser(id, name, mail) {
  // references to the input fields
  let nameInput = document.querySelector('#name-update');
  let mailInput = document.querySelector('#mail-update');
  nameInput.value = name;
  mailInput.value = mail;
  selectedUserId = id;
}

function updateUser() {

}

// ========== DELETE ==========
function deleteUser(id) {

}