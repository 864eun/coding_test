const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function getThreeTri(a) {
    if (a % 3 === 0) return 1;
    else return 0;
}

function numToString(a) {
    let stringNum = a.toString();
    if (
        stringNum.includes("3") ||
        stringNum.includes("6") ||
        stringNum.includes("9")) return 1;
    else return 0;

}

function getNum(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (numToString(i) || getThreeTri(i)) count++;
    }
    return count;
}

let total = getNum(A, B);
console.log(total);
