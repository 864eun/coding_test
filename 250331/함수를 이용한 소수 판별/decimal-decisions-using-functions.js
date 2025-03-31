const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
function getPrimeNum(a){
    let count = 0;
    for(let i=1; i<=a; i++){
        if(a%i === 0) count++;
    }
    if (count === 2) return 1;
    else return 0;
}

function getPrimeNumTotal(a, b){
    let total = 0;
    for(let i=a; i<=b; i++){
        if(getPrimeNum(i)) total += i;
    }
    return total ;
}

let total = getPrimeNumTotal(A, B);
console.log(total);