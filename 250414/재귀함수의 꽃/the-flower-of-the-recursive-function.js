const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

// Please Write your code here.
function printReverse1(n){
    if(n===0) return;

     process.stdout.write(String(n)+" ");
     printReverse1(n-1)
};
function printReverse2(n){
    if(n===0) return;

    printReverse2(n-1)
    process.stdout.write(String(n)+" ");
};

printReverse1(n);
printReverse2(n);