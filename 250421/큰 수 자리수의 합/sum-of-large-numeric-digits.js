const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.
function digitSum(n) {
    if (n < 10) {
        return n;
    }

    return digitSum(parseInt(n / 10)) + n % 10;
}

console.log(digitSum(a * b * c));