const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, m] = input[0].split(" ").map(Number);
// Please write your code here.

function changeValue(n,m){
    [n,m]=[m,n]
    return [n,m]
};

[n, m]=changeValue(n,m);
console.log(n,m);