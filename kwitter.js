function addUser(){
    user_name=document.getElementById("User_Name").value;
    localStorage.setItem("User_Name",user_name);
    window.location="kwitter_room.html"
}