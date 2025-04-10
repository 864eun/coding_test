const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.

function checkString(A){
    let count = 0;
    for(let i=0; i<A.length-1; i++){
        for(let q=0; q<A.length-1; q++){
            if(A[i]!==A[q])count++;
        }
    }
    if(count>=2)return 'Yes';
    else return 'No';
}

console.log(checkString(A));