const fs = require('fs');
let a = fs.readFileSync(0).toString().trim().split('');

console.log(Number(a[1] a[0]))