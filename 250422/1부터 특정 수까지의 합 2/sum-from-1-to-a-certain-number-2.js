const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
function getPlusNum(n){
    if(n===0)return 0;

    return getPlusNum(n-1)+n
}

console.log(getPlusNum(n));
