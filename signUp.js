// require('dotenv').config();
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

  //configuration
  const firebaseConfig = {

    apiKey: "AIzaSyDVbr9TSEr2SKExQNX6WCuAP3FWDe4hUh4",

    authDomain: "bootcamp-53597.firebaseapp.com",

    projectId: "bootcamp-53597",

    storageBucket: "bootcamp-53597.appspot.com",

    messagingSenderId: "494575287387",

    appId: "1:494575287387:web:965cc81fa650014f0a537e",

    measurementId: "G-56R4774WC9"

  };


const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
const auth = getAuth();

const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById(
  "confirm-password-signup"
);
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");

var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;

createacctbtn.addEventListener("click", function () {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
        window.alert("Success! Account created.");
        window.location = "./createTask.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        window.alert("Error occurred. Try again.");
        window.alert(errorMessage);
      });
  }
});

submitButton.addEventListener("click", function () {
  email = emailInput.value;
  // console.log(email);
  password = passwordInput.value;
  // console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      window.alert("Success! Welcome back!");
      window.location = "./createTask.html";

      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      window.alert("Error occurred. Try again.");
    });
});

signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});

// //add firebase to our web app
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// //import authorization
// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//   } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

//   //configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyDVbr9TSEr2SKExQNX6WCuAP3FWDe4hUh4",
//     authDomain: "bootcamp-53597.firebaseapp.com",
//     projectId: "bootcamp-53597",
//     storageBucket: "bootcamp-53597.appspot.com",
//     messagingSenderId: "494575287387",
//     appId: "1:494575287387:web:965cc81fa650014f0a537e",
//     measurementId: "G-56R4774WC9"
//   };

//   //initialize firebase
//   const app = initializeApp(firebaseConfig);
// //calling the getAuth that was imported
//   const auth = getAuth() 

//   //login fields 
// let emailInput = document.getElementById('email');
// let passwordInput = document.getElementById('password');
// let submitButton = document.getElementById('submit');

// //create account
// let signUpEmailIn = document.getElementById('email-signup');
// let confirmSignUpEmailIn = document.getElementById('confirm-email-signup');
// let signUpPasswordIn = document.getElementById('password-signup');
// let confirmSignUpPasswordIn = document.getElementById('confirm-password-signup')
// let  createacctbtn = document.getElementById('create-acct-btn');

// //sign in as a form
// let main = document.getElementById('main');
// //create account/sign up as a form
// let createAcct = document.getElementById('create-acct');

// //signUp button
// let signUpButton = document.getElementById('sign-up');
// //return to login button
// let returnButton = document.getElementById('return-btn');

// var email,
//   password,
//   signupEmail,
//   signupPassword,
//   confirmSignupEmail,
//   confirmSignUpPassword;

// createacctbtn.addEventListener("click", function () {
//   var isVerified = true;

//   signupEmail = signupEmailIn.value;
//   confirmSignupEmail = confirmSignupEmailIn.value;
//   if (signupEmail != confirmSignupEmail) {
//     window.alert("Email fields do not match. Try again.");
//     isVerified = false;
//   }

//   signupPassword = signupPasswordIn.value;
//   confirmSignUpPassword = confirmSignUpPasswordIn.value;
//   if (signupPassword != confirmSignUpPassword) {
//     window.alert("Password fields do not match. Try again.");
//     isVerified = false;
//   }

//   if (
//     signupEmail == null ||
//     confirmSignupEmail == null ||
//     signupPassword == null ||
//     confirmSignUpPassword == null
//   ) {
//     window.alert("Please fill out all required fields.");
//     isVerified = false;
//   }

//   if (isVerified) {
//     createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
//       .then((userCredential) => {
//         // Signed in
//         // const user = userCredential.user;
//         // ...
//         window.alert("Success! Account created.");
//         window.location = "./createTask.html";
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//         window.alert("Error occurred. Try again.");
//         window.alert(errorMessage);
//       });
//   }
// });

// submitButton.addEventListener("click", function () {
//   email = emailInput.value;
//   // console.log(email);
//   password = passwordInput.value;
//   // console.log(password);

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;

//       window.alert("Success! Welcome back!");
//       window.location = "./createTask.html";

//       // ...
//     })
//     .catch((error) => {
//       // const errorCode = error.code;
//       // const errorMessage = error.message;
//       window.alert("Error occurred. Try again.");
//     });
// });

// //set the login to be hidden when the signup button is clicked
// signUpButton.addEventListener("click",function(){
//     //sign in form becomes hidden
//     main.style.display = 'none';
//     //the create account form is displayed
//     createAcct.style.display = "block";
// }) 

// returnButton.addEventListener("click",function(){
//     //create account form becomes hidden
//     createAcct.style.display = 'none';
//     //the sign in form is displayed
//     main.style.display = "block";
// }) 