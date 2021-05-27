//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
    user_name=localStorage.getItem("User_Name");
    document.getElementById("user_name").innerHTML="Welcome  "+user_name+"!"
    function addRoom(){
          room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
       });});}
getData();
function logout(){
      localStorage.removeItem("User_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}