function fun(){
    console.log("Hello Prun");
}

const a = [1, 3, 5 , "Hello", fun];  // parenthesis na lgane pe .. ye print hoga ki function h with its name

console.log(a);  

const b = [1, 3, 5 , "Hello", fun()]; // parethesis lgane pe function jo return kr rha h wo lgayenge

console.log(b);