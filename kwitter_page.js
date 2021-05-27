//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCAZtu78fo_uXXlLjLDaJqX-QPqveyyp60",
      authDomain: "kwitter-7b0af.firebaseapp.com",
      databaseURL: "https://kwitter-7b0af-default-rtdb.firebaseio.com",
      projectId: "kwitter-7b0af",
      storageBucket: "kwitter-7b0af.appspot.com",
      messagingSenderId: "486413603582",
      appId: "1:486413603582:web:5c6689bc9aebb5cc148baf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name =localStorage.getItem("User_Name");
    room_name =localStorage.getItem("room_name");
    function send(){
          msg =document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}