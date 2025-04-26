const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
// Please Write your code here.
function getNum(n){
    if(n===1)return 1;
    if(n===2)return 2;

    return getNum(parseInt(n/3))+getNum(n-1);
}

console.log(getNum(n));