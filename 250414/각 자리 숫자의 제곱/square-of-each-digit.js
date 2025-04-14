const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
function lastNum(n){
    if(n===0) return 0;

    return lastNum(parseInt(n/10)) + (n%10)*(n%10);
}

console.log(lastNum(n));