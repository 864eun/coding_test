const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

// Please Write your code here.
function printSquare(n, m) {
    for (let q = 0; q < n; q++) {
        let str ="";
        for (let w = 0; w < m; w++) {
            str += '1';
        }
        console.log(str);
    }
};

printSquare(n,m);