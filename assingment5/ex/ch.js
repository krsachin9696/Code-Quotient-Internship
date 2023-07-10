// const https = require('https');
// const fs=require('fs');
// let apicol;
// function onComplete(err,data){
//     if(err){
//         console.log("error",err)

//     }else{
//         // console.log("data",data);
//         apicol=data.split("\n");
//         callback(apicol);
//         console.log(apicol);
//     }
// }

// fs.readFile("url.txt","utf8",onComplete);//yaha par oncomplete isliye use kiya jata hai kyuki kabhi kabhi file reading me js ko time lagata hai to baki ka kam ruk jayega to isisliye js kya krta hai program me age badh jata hai aur ek function definition arguement me leta hai na ki call aur bolta hai jba mai file read kr lunga tb tk tum kam krte rho mai tmko bta dunga
// // console.log("age ka kam");
// // console.log(apicol);

// function makeFile(apiUrl){
//     return new Promise(function (resolve, reject) {

//         https.get(apiUrl, function(res) {
//             let data = '';
          
//             // Collect the response data
//             res.on('data', function(chunk) {
//               data += chunk;
//             });
          
//             // Process the response data
//             res.on('end', function() {
//               resolve(data);
//           }).on('error', function(error) {
//             reject(error);
//           });
          
//     });
// });
// }
// // for(const k of apicol){
// //     console.log(k);
// // }
// function callback(apicol){
//     for(let i=0;i< apicol.length;i++ ){
//         const apiUrl=apicol[i];
//         makeFile(apiUrl).then(function(data){
//             fs.writeFile("api"+i+".txt",data,function(){
//                 if(err){
//                     console.log("error",err);
            
//                 }else{
//                     console.log("data",data);
//                 }
//                 });
//          }).catch(function (err) {
//             console.log("error", err);
//           });
//     }
    
// }

const https = require('https');
const fs=require('fs');
let apicol;

function readingFile(){
    return new Promise(function(resolve,reject){
        fs.readFile("url.txt","utf8",function(err,data){
            if(err){
                console.log("error",err);
                reject(err);
            }else{
                
                apicol=data.split("\n");
                resolve(apicol);
                console.log(apicol);
            }
        });
});
    
}

readingFile().then(function(data){
    readArray(data);
}).catch(function(err){
    console.log(err);
});




function fetchapi(apiUrl){
    return new Promise(function (resolve, reject) {

        https.get(apiUrl, function(res) {
            let data = '';
          
            // Collect the response data
            res.on('data', function(chunk) {
              data += chunk;
            });
          
            // Process the response data
            res.on('end', function() {
              resolve(data);
          }).on('error', function(error) {
            reject(error);
          });
        });
    });
}



function createFile(data,ind){
    return new Promise(function (resolve, reject) {
        fs.writeFile("api"+ind+".txt",data,function(err) {
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    });
}
function readArray(apicol){
    for(let i=0;i< apicol.length;i++ ){
        const apiUrl=apicol[i];
        fetchapi(apiUrl).then(function(data){
            createFile(data,i).then(function(d){
                console.log("file created",i);
            }).catch(function(error){
                console.log("file not created");
            });
         }).catch(function (err) {
            console.log("error", err);
          });
    }
    
}