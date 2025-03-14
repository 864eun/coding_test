let fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

const result = [A, B];
for(let i = 2 ; i<10;i++){

    let num =result[i-2]+result[i-1];
    result.push(num%10);
    
}
console.log(result.join(' '));