const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
function countNumber(a) {
    if (a === 1) {
        return 0;
    }

    if (a % 2 === 0) {
        return countNumber(a / 2) + 1;
    } else {
        return countNumber(3 * a + 1) + 1;
    }
}

console.log(countNumber(n));