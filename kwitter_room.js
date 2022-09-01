var firebaseConfig = {
      apiKey: "AIzaSyA5HRghCneHz35_o0iTGxMzbU4uugrQ8zk",
      authDomain: "kwitter-c3f16.firebaseapp.com",
      databaseURL: "https://kwitter-c3f16-default-rtdb.firebaseio.com",
      projectId: "kwitter-c3f16",
      storageBucket: "kwitter-c3f16.appspot.com",
      messagingSenderId: "864190340759",
      appId: "1:864190340759:web:10e482bb46fe7e35d513d2"
    };
     // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

      user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name +"!";

function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class='room_names' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +" </div><hrs>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_room.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}