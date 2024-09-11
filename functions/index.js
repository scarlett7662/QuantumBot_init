"use strict";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyA2gklx4dtuA_BUJ3mCQicn2M084mJZWd4",
//   authDomain: "quantumbot-sz.firebaseapp.com",
//   databaseURL: "https://quantumbot-sz-default-rtdb.firebaseio.com",
//   projectId: "quantumbot-sz",
//   storageBucket: "quantumbot-sz.appspot.com",
//   messagingSenderId: "966170376443",
//   appId: "1:966170376443:web:fbfc4d35d2e9dcabcc585e",
//   measurementId: "G-8YMMSC0WZ7",
// };

// initializeApp(firebaseConfig);

const admin = require("firebase-admin");
admin.initializeApp();

// import function to add messages
const {addMessage} = require("./api/addMessage");
console.log("here is index.js. 21line");
// export function
exports.addMessage = addMessage;
