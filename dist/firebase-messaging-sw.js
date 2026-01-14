// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// Your Firebase config (same as in your main script)
const firebaseConfig = {
  apiKey: "AIzaSyBXf5HCVAL4UfiHDSN_oyGUGioI2AQoBbc",
  authDomain: "stwbdkw.firebaseapp.com",
  databaseURL: "https://stwbdkw-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "stwbdkw",
  storageBucket: "stwbdkw.firebasestorage.app",
  messagingSenderId: "493454339708",
  appId: "1:493454339708:web:bc72aea3b64309faa1a3f9",
  measurementId: "G-G79DRRYH8C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
