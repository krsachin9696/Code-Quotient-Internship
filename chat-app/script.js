const userNameNode = document.getElementById("userName");
const submitUserNameNode = document.getElementById("submitUserName");

submitUserNameNode.addEventListener("click", function() {
    const userName = userNameNode.value;
    console.log(userName);

    socket.emit("connect user", userName);
});


var socket = io();


socket.on("le bhai message aaya", function(msg){
    console.log("bhai ne msg kiya");
});

// This part of the code prints the broadcasted msg of any new user connection
socket.on("disconnect", function (msg) {
    console.log("bhai chala gaya")
      });

socket.on("connect", function (msg) {
    console.log("Bhai aa gya");
    });
