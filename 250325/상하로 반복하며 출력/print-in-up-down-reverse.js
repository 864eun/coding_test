const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

for(let i=0;i<input;i++){
    let str = "";
    for(let q=0;q<input;q++){
        if(q%2===0) str+=i+1;
        else str += input - i;
    }
    console.log(str);
}