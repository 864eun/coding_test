const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.

let newStringA = a.join("");
let newStringB = b.join("");

function checkIncludeNum(n,m){
    if(n.includes(m)) return 'Yes';
    else return 'No';
}

console.log(checkIncludeNum(newStringA,newStringB));

