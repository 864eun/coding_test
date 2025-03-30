const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function addReturn(n){
    let total=0;
    for(let i=0; i<=n; i++){
        total += i;
    }
    return Math.floor(total / 10) ;
}

let result = addReturn(n);
console.log(result);