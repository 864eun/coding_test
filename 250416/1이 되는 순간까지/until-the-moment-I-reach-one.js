const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

let count = 0;
function getDivNum(n) {
    if (n === 1) return count;

    if (n % 2 === 0) {
        count++;
        return getDivNum(parseInt(n / 2))
    }
    else if (n % 2 !== 0) {
        count++;
        return getDivNum(parseInt(n / 3))
    }
};

console.log(getDivNum(n));