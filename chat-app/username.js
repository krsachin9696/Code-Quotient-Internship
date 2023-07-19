const express = require("express");
const fs = require("fs");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const socketServer = new Server(server);

const userBase = require("../userBase/users");

app.get("/", function(req, res){
    // res.send('<h1>Hello world</h1>');
    res.sendFile(__dirname + '/username.html');
});

app.get("/script.js", function(req, res){
    res.sendFile(__dirname + "/script.js");
});

server.listen(3000, () => {
    console.log("Server is created");
});

socketServer.on("connect", (socket) => {

    // You can handle events from this particular socket here
    socket.on("disconnect", () => {
        console.log("user disconnected");

    });

    socket.on("chat message", function (msg){
        console.log("message:" + msg);

        socketServer.emit("le bhai message aa gye");
    });

    socket.on("connect user", function (userName) {
        console.log("user connected:" + userName);
    });
});
