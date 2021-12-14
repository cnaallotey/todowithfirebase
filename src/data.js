// Import the functions you need from the SDKs you need
import { firebase } from '@firebase/app'
import '@firebase/firestore'
// Required for side-effects

firebase.initializeApp({
  apiKey: "AIzaSyC7Wwg2QokzZx1VJDm7tteiYAmxGZKmtz8",
  authDomain: "todo-13973.firebaseapp.com",
  projectId: "todo-13973",
  databaseURL: "https://todo-13973.firebaseio.com",
  storageBucket: "todo-13973.appspot.com",
  messagingSenderId: "919006574232",
  appId: "1:919006574232:web:5a12879e66f8e9664202ed",
  measurementId: "G-8MQTHCSKNM"
});

export const db = firebase.firestore()
