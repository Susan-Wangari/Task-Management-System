// a function that enables you to initialize your project. Makes sure your project is ready
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
//connects the database
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth, //user authorization
  createUserWithEmailAndPassword, //option for sign up with email and password
  signInWithEmailAndPassword, //option for sign in with email and password
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

  //firebase configuration
  const firebaseConfig = {
//used to connect the app
    apiKey: "AIzaSyDVbr9TSEr2SKExQNX6WCuAP3FWDe4hUh4",
//domain used for authorization
    authDomain: "bootcamp-53597.firebaseapp.com",

    projectId: "bootcamp-53597",

    storageBucket: "bootcamp-53597.appspot.com",
//for a messaging application
    messagingSenderId: "494575287387",
//application id
    appId: "1:494575287387:web:965cc81fa650014f0a537e",
//for creating google analytics
    measurementId: "G-56R4774WC9"

  };

//initializing the application
const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
const auth = getAuth();
//login form
const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");
//create account form
const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById(
  "confirm-password-signup"
);
//create account button
const createacctbtn = document.getElementById("create-acct-btn");
//return to login button
const returnBtn = document.getElementById("return-btn");
//declare variables
var email,
  password,
  signupEmail, //assigned the input of the signupEmailIn
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;
//when button is clicked validate that email entered matches confirm email and password matches too
//if they match, create the account
createacctbtn.addEventListener("click", function () {
  var isVerified = true;

//assigns the value of the password input field to a variable signupEmail
  signupEmail = signupEmailIn.value;
  //assigns the value of confirmSignupEmailIn and assigns it to confirmSignupEmail
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) { //makes sure the signUp email matches the signIn email.Useful in the case where the user enters the email without entering confirm email
    window.alert("Email fields do not match. Try again.");
    //stops the user from logging in
    isVerified = false;
  }
//assigns the value of the password input field to a variable
  signupPassword = signupPasswordIn.value;
  //assigns the value of the confirm password input field to a variable
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }
//makes sure every input field is filled
  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) { //makes sure everything is verified
    /*calls the function createUserWithEmailAndPassword that was created
      the auth,signUpEmail and signupPassword are used as parameters
      It is a claaback function*/
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
    //used for creating the next step after the user signs up
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
        //tells the user that the account was created successfully
        window.alert("Success! Account created.");
        //directs the user to a different page. The location is a file/different web page
        window.location = "./createTask.html";
      })
      //catches any other error not captured above
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
  //assigns the input of the email field to the email variable
  email = emailInput.value;
  // console.log(email);
   //assigns the input of the passowrd field to the password variable
  password = passwordInput.value;
  // console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //tells the user they have successfully logged in
      window.alert("Success! Welcome back!");
       //directs the user to a different page. The location is a file/different web page
      window.location = "./createTask.html";

      // ...
    })
    //catches a different error not specified
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