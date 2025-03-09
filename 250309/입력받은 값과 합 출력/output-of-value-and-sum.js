const fs = require('fs');
let number = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(number[0]);
let b = Number(number[1]);
let c = a+b;
console.log(a, b, c)
