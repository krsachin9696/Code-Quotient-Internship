const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hello world");
})

app.get("/about", function(req, res){
    res.send("This is about section !");
})

app.get("/contact", function(req, res){
    res.send("Lets contact");
})

app.listen(3000, () => {
    console.log("bn gya server");
})