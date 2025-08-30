// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyARNVArmUXwSqZI8w7YDx6YaIT-_LZ_Z0g",
  authDomain: "maxoncodes-44d8d.firebaseapp.com",
  projectId: "maxoncodes-44d8d",
  storageBucket: "maxoncodes-44d8d.appspot.com",
  messagingSenderId: "423151629268",
  appId: "1:423151629268:web:9dab6dac5406fb058ddc41"
});

const messaging = firebase.messaging();
