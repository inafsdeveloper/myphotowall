const firebaseApp = require('firebase/app');
const db = require('firebase/database');

var config = {
    apiKey: "AIzaSyB5jmrGlpZupqTZm44w52H3gMi8vuT5eWo",
    authDomain: "photowall-ce05a.firebaseapp.com",
    databaseURL: "https://photowall-ce05a.firebaseio.com",
    projectId: "photowall-ce05a",
    storageBucket: "photowall-ce05a.appspot.com",
    messagingSenderId: "990243722596",
    appId: "1:990243722596:web:a61c93745ad2b6fee9d671"
  };

  firebaseApp.initializeApp(config);
  const database = firebaseApp.database();

  module.exports = {database};