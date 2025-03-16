const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let A = Number(input[0]);
let B = Number(input[1]);
let count = 0;

for(let i = A;i<B;i++){
    if(i%2===0){
        count+=i;
    }
}
console.log(count);