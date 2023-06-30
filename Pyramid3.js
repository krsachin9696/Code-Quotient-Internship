function main(){
    // Use the readLine() method to read a line from STDIN
    var x = readLine();
    for(var i=1; i<=x; i++){
      var b = "";
      for(var k = x-i; k>=1; k--){
        b += "*";
      }
          for(var j=1; j<=i; j++){
              b += j;
          }
      console.log(b);
    }
  }