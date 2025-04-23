const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
function getNum(n){
 if(n<=2)return 1;

 return getNum(n-1)+getNum(n-2);
}

console.log(getNum(n));