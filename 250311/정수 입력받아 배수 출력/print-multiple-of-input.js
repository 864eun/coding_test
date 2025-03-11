const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

let result = 0;
let resultTotal = "";
for(let i=0; i<5; i++){
    result += input 
    resultTotal += (result + " ");
}
console.log(resultTotal);