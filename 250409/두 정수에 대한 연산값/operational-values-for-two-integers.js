const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);
// Please Write your code here.

function changeNum(a, b){
    let firstNum = Math.min(a,b)*2;
    let secondNum = Math.max(a,b)+25;
    return [firstNum, secondNum]
}

let [q,w]= changeNum(a, b);

console.log(q,w)