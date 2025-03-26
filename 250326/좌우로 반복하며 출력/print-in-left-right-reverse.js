const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

for(let q =0; q<input;q++){
    let str = "";
    for(let w =0;w<input;w++){
        if(q%2===0) str+=w+1;
        else str+=input-w;
    }console.log(str);
}