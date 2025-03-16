const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
input.map(Number);
countA=0;
countB=0;

for(let i =0;i<10;i++){
    if(input[i]%3===0 &&input[i]%5===0){
        countA++;
        countB++;
    } else if(input[i]%5===0){
        countB++;
    } else if(input[i]%3===0){
        countA++;
    }
}

console.log(countA, countB);