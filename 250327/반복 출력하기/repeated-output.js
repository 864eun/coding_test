const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function printLine(a){
    for(let i=0;i<a;i++){
        process.stdout.write("12345^&*()_\n")
    }
};

printLine(n);