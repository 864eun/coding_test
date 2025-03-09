const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');
console.log(Number(a[0]).toFixed(3));
console.log(Number(a[1]).toFixed(3));
console.log(Number(a[2]).toFixed(3));