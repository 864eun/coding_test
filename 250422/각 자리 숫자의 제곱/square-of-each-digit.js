const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
function getNum(n){
    if(n===0)return 0;

    return getNum(parseInt(n/10))+((n%10)*(n%10));
}

console.log(getNum(n));