var currentUserIndex=1;
var userArray=[
    {"name":"John Doe", "gender":"Male", "image":"/img/john.png"},
     {"name":"Jane Doe", "gender":"Female", "image":"/img/jane.png"},
    
];
function toggleUser(){
    currentUserIndex=1-currentUserIndex;
    var nextUser=userArray[currentUserIndex];
    displayUser(nextUser);
}
// dom manipulation
function displayUser(user){
     //console.log(user);
     document.getElementById("userName").textcontent=user.name;
     document.getElementById("userGender").textcontent=user.gender;
     document.getElementById("userImage").src=user.image;
}