let fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');
const A = Number(input[0]);
const N = Number(input[1]);

let result = A;
for(let i=0; i<N; i++){
    result += N ; 
    console.log(result);
}