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
document.getElementById("user_name").innerHTML ="Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding user"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function (childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name = " + Room_names);
row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}