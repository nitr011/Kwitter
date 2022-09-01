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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
function send(){
      msg = document.getElementById("msg").value;
      firebase.databse().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0;
      });
      document.getElementById("msg").value = "";
      f
}

//End code
      } });  }); }
getData();
