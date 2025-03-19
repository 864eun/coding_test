const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());
let count = 1;

for(let i=0; i<N; i++){
    let nums= "";
    for(let j=1; j<=i+1; j++){
        nums += count+" ";
        count ++;
    }
    console.log(nums);
}