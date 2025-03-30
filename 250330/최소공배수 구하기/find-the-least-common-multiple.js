const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.
function div(n, m) {
    let num = [];
    for (let i = 2; i < Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            num.push(i);
        }
    }
    
    let total = 1; 
    for(let q=0; q<num.length;q++){
        total = total * num[q];
    }
    console.log(total);
}

div(n,m);
