function main(){
    // Use the readLine() function to read a line from STDIN.
    var n = readLine();
    for(var i=1; i<=n; i++){
      var b = "";
      for(var k = n-i; k>=1; k--){
        b += "*";
      }
      for(var j=i; j>=1; j--){
          b += j;
      }
      console.log(b);
    }
  }