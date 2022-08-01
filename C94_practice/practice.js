
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADzs_zg9n9CuyscNOLa_GIzjHbhQmYrkU",
    authDomain: "kwitter-20688.firebaseapp.com",
    databaseURL: "https://kwitter-20688-default-rtdb.firebaseio.com",
    projectId: "kwitter-20688",
    storageBucket: "kwitter-20688.appspot.com",
    messagingSenderId: "399636847646",
    appId: "1:399636847646:web:1de38545ae7c0cab3ea20f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name= document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          weekday:"tuesday"

      });

  }