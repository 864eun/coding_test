const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

function printStar1(n){
    if(n===0)return;

    for(let i=0;i<n;i++){
        process.stdout.write("* ")
    }
    console.log(" ")
    printStar1(n-1);
}
function printStar2(n){
    if(n===0)return;

    printStar2(n-1);
    for(let i=0;i<n;i++){
        process.stdout.write("* ")
    }
    console.log(" ")
}


printStar1(n);
printStar2(n);