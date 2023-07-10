function main(){
    // Use the readLine() function to read a line from STDIN
    // var n = readLine();
    var n = 5;
    for(var i=1; i<=n; i++){
      var b = "";
      for(var j=i; j>1; j--){
          b += j;
      }
      for(var j=1; j<=i; j++){
        b += j;
      }
      console.log(b);
    }
  }

  main();