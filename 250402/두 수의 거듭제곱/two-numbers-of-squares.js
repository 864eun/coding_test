const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = input.map(Number);
// Please Write your code here. 

function getPower(a, b){
    let powerResult = 1;
    for(let i=1; i<=b; i++){
        powerResult *= a ;
    }  
    return powerResult; 
};

console.log(getPower(a, b));