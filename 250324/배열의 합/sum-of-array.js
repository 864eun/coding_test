const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let newArray = [];
for(let i = 0; i<4 ; i++){
    newArray.push(input[i].split(" ").map(Number));
    let total = 0;
    for(let q =0;q<4;q++){
        total += newArray[i][q];
    }
    console.log(total);
}
