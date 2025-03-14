const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();


let input1 = input.slice(0,1);
let input2 = input.slice(2,(input.length-2));
let input3 = input.slice(-1);

let result = input1 + "a" +input2+"a"+input3;
console.log(result);