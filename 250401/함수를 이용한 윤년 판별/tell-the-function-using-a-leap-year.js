const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);
// Please Write your code here.

function checkYear(a){
    if(a%4 !== 0) return false;
    if(a%100===0 && a%400 != 0) return false ;
    if(a%4===0) return true;
}

console.log(checkYear(y));