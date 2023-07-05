
function writefile() {
    const fs = require("fs");

    const data = "Hello, world! This is the content written through node program in another file.";

    fs.writeFileSync("./files/a.txt", data);

}



writefile();