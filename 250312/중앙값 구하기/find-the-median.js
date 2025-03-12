const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
let A = input[0];
let B = input[1];
let C = input[2];

const numArray = [A, B, C];
numArray.sort();
console.log(Number(numArray[1]));