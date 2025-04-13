const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
function printReverse1(n){
    if(n===0) return;

    printReverse1(n-1);
    process.stdout.write(n+" ");
}
function printReverse2(n){
    if(n===0) return;

    process.stdout.write(n+" ");
    printReverse2(n-1);
}

printReverse1(n);
console.log(" ")
printReverse2(n);