const express = require("express");
const fs = require("fs");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const socketServer = new Server(server);



app.get("/", function(req, res){
    // res.send('<h1>Hello world</h1>');
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
    console.log("Server is created");
});

socketServer.on("connection", (socket) => {
    // to Broadcast a message to connected users when someone connects.
    socket.broadcast.emit("user connected", "a new user is connected");

    // You can handle events from this particular socket here
    socket.on("disconnect", () => {
        console.log("user disconnected");
        // to Broadcast a message to connected users when someone connects or disconnects.
        socketServer.emit("user disconnect", "a user has disconnected");
    });

    socket.on("chat message", function (msg){  // this is an even listner which prints the message entered by the user through server, 
        console.log("message: " + msg);
        socketServer.emit("chat from server: ", msg);  // is server k pas jo msg aaya h, use ye apne clints k pas bhej rha h 
    });


    console.log("a user connected");
});
