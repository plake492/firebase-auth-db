var express = require("express");
var path = require("path");
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyChGYkOa3akdFBFZGepjEs6sSPQOokKGFc",
  authDomain: "auth-db-test-2ba3f.firebaseapp.com",
  databaseURL: "https://auth-db-test-2ba3f.firebaseio.com",
  projectId: "auth-db-test-2ba3f",
  storageBucket: "auth-db-test-2ba3f.appspot.com",
  messagingSenderId: "925794880175",
  appId: "1:925794880175:web:df017df7edb8aa7078e25a",
  measurementId: "G-0XY3N1P4XR",
};

firebase.initializeApp(firebaseConfig);

console.log(firebaseConfig);

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/signup.html"));
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/login.html"));
});

app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
