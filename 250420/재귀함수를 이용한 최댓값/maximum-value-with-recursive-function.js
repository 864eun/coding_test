const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
function maxNum(n){
    if(n===0) return arr[0];

    return Math.max(maxNum(n-1), arr[n]); 
}

console.log(maxNum(n-1));