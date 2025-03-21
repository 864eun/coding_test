const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a= [];
for(let d = 0 ;d<3;d++){
    a.push(input[d].split(" ").map(Number));
}

let b= [];
for(let d = 4 ;d<7;d++){
    b.push(input[d].split(" ").map(Number));
}

for(let i=0;i<3;i++){
    let c = a[i];
    let d = b[i];
    let total = [];
    for(let j = 0; j<c.length; j++){
        total.push((c[j])*(d[j]));
    }
    console.log(total.join(" "));
}

