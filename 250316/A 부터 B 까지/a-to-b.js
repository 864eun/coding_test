const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
let A = Number(input[0]);
let B = Number(input[1]);
let result = [];

while(A<=B){
    result.push(A);
    if(A%2===1){
        A=A*2;
    } else if(A%2===0){
        A+=3;
    }
}

console.log(result.join(" "))