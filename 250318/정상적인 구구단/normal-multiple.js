const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

for(let i=1;i<=input;i++){
    let str = [];
    for(let j=1;j<=input;j++){
        let N = `${i} * ${j} = ${i*j}`;
        str.push(N);
    }
    console.log(str.join(", "));
}   

