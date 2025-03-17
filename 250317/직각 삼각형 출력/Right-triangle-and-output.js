const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());
let N = input;

for(let i=0; i<N; i++){
    let str = "";
    for(let j=0; j<i*2+1; j++){
        str += "*"
    }
    console.log(str);
}