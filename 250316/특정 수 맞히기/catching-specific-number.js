const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let i =0;

while(Number(input[i]) !== 25){
    if(Number(input[i])<25){
        console.log("Higher");
        i++;
        continue;
    } else if(Number(input[i])>25){
        console.log("Lower");
        i++;
        continue;
    } 
}

if(Number(input[i]) === 25){
    console.log("Good");
}