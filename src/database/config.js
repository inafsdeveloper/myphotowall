const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyB5jmrGlpZupqTZm44w52H3gMi8vuT5eWo",
    authDomain: "photowall-ce05a.firebaseapp.com",
    databaseURL: "https://photowall-ce05a.firebaseio.com",
    projectId: "photowall-ce05a",
    storageBucket: "photowall-ce05a.appspot.com",
    messagingSenderId: "990243722596"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  module.exports = {database};