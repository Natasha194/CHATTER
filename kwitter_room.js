
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAVx9x_tz8KBEQnvxMGw3oaE2LEJAckr5g",
      authDomain: "kwitter-44187.firebaseapp.com",
      databaseURL: "https://kwitter-44187-default-rtdb.firebaseio.com",
      projectId: "kwitter-44187",
      storageBucket: "kwitter-44187.appspot.com",
      messagingSenderId: "728405560801",
      appId: "1:728405560801:web:7b1b78822c7b322760d6a0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function name() {
var username = localStorage.getItem("login Name");

document.getElementById("welcomeLabel").innerHTML = "Welcome " + username + "!!";
}

function addRoom() {
      var roomName = document.getElementById("roomName").value;
      firebase.database().ref("/").child(roomName).update({purpose: "adding_room_name"});
      localStorage.setItem("room name", roomName);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      console.log(Room_names);
     
      row = "<div class='room_name' id='+ Room_names +' onclick='redirectToRoomName(this.id)'>#" + Room_names
      + "</div> <hr>";

      document.getElementById("output").innerHTML += row;

      

      //End code
      });});}
getData();


//new

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("name", name);
      window.location = "kwitter_page.html";
}


function logout() {
      localStorage.removeItem("login Name");
      localStorage.removeItem("room name");
      window.location = "index.html";
}