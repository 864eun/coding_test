const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
function addNumber(n){
    if(n===0) return 0;

    return addNumber(n-1)+n;
}

console.log(addNumber(n));
