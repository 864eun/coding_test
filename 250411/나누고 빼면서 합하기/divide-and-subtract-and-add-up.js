const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let A = input[1].split(" ").map(Number);
// Please Write your code here.
function getNum() {
    let total = 0;
    while (m > 0) {
        total += A[m-1];
        m % 2 === 0 ? m = parseInt(m/2) : m -= 1 ;
    }
    return total ;
}

console.log(getNum());

