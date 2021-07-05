var firebaseConfig = {
    apiKey: "AIzaSyBl45E52jHXVGHJL1m7xXc5nYkXLENoLYs",
    authDomain: "kwitterproject-980f9.firebaseapp.com",
    databaseURL: "https://kwitterproject-980f9-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-980f9",
    storageBucket: "kwitterproject-980f9.appspot.com",
    messagingSenderId: "606074642374",
    appId: "1:606074642374:web:09e504eacbcafd5e57dcc7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });

      document.getElementById("msg").value = "";
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
    