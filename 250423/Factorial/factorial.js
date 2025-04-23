const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

// Please write your code here.
function getNum(N){
    if(N===0) return 1;

    return getNum(N-1)*N;
}

console.log(getNum(N));