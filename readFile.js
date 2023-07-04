

function readfile(){
    const fs = require("fs");

    const data = fs.readFileSync("./files/kela.jpg", "utf8");
    // const data = fs.readFileSync("./files/a.txt", "utf8");

    console.log(data);
}

readfile();