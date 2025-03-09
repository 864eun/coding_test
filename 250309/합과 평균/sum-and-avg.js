let fs = require('fs');
let num = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(num[0]);
let b = Number(num[1]);
let c = ((a+b)/2).toFixed(1);
console.log(a+b, c);