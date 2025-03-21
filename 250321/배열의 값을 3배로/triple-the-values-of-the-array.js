const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for(let i=0; i<input.length; i++){
    
    let a = input[i].split(" ").map(Number);
    let total = "";

    for(let j=0; j<a.length;j++){
       let b = a[j]*3 ;
       total += b +" ";
    }
    console.log(total);
}

