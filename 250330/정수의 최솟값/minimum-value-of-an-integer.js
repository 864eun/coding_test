const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.
function minNum(a, b, c = 0) {

    return Math.min(a, b, c);
}

let result = minNum(a,b,c);
console.log(result);