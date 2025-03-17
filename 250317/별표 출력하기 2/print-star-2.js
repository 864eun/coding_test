const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());
let N = input;

for(let i=N; i>0; i--){
    let str = "";
    for(let j=0; j<i; j++){
        str += "* "
    }
    console.log(str);
}