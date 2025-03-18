const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let total = 0;

for (let i = a; i <= b; i++) {
    let count = [];
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            count.push(j)
        }
    }
    if (count.length === 3) {
        total++;
    }
}

console.log(total);