const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log("request", req.url);  // This line print the url of the request in the colsole... 
    res.end("Hello Sachin");     // This line prints the content of the web page
});

server.listen(8000, "127.0.0.1", () => {  // 127.0.0.1 is the localhost address & 8000 is the port number 
    console.log("Server is listening");
});









// The above code can also be written as 


const receptor = function(request, response){
    console.log("request", request.url);  // This line print the url of the request in the colsole... 
    // response.end("Hello world");

    const url = request.url;
    const method = request.method;

    if(url == "/"){
        // response.end("HEllo World");
        fs.readFile("./index.html", "utf8", function(err, data){    //  This part of the code fetches the html file index.html
            if(err){                                                //  
                response.end("error");                              //   and represents it on when localhost:3000 is called
            }                                                       //
            else{                                                   //
                response.end(data);                                 //
            }                                                       //
        })
    }
    else if(url == "/about"){
        response.end("about");
    }
    else if(url == "/contact"){
        response.end("contact");
    }
    else{
        response.end("Not Found");
    }
};

const serv = http.createServer(receptor);

serv.listen(3000, function() {
    console.log("Server is listnig to port number 3000");
});