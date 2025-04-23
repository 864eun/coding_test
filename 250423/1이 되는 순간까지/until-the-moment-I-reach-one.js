const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
function getNum(n){
    if(n===1)return 0;

    if(n%2===0)return getNum(parseInt(n/2))+1;
    else return getNum(parseInt(n/3))+1;
}

console.log(getNum(n));