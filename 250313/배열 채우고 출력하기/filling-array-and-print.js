const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

input.reverse();
let result = input.join('');
console.log(result);
