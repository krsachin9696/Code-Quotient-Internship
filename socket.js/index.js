const express = require("express");
const fs = require("fs");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const socketServer = new Server(server);

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});



server.listen(3000, () => {
    console.log("bn gya server");
});

socketServer.on("connection", (socket) => {

    socket.on("disconnect", function() {        // this is  a function to print server disconnected on console
        console.log("server disconnected !!");  // when the server is disconnected i.e closed from the browser(localhost:3000)
    });


    socket.on("chat message", function (msg){  // this is an even listner which prints the message entered by the user through server, 
        console.log("message: " + msg);
        socketServer.emit("chat from server: ", msg);  // is server k pas jo msg aaya h, use ye apne clints k pas bhej rha h 
    });



    // console.log(socket);
    console.log("a user connected");  // when the server is opened on browser(server is connected), this prints in console
});