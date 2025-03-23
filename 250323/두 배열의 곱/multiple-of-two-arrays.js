const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let firstArray =[];
for(let i=0; i<3;i++){
    firstArray.push(input[i].split(" ").map(Number));
}

let secondArray =[];
for(let i=4; i<7;i++){
    secondArray.push(input[i].split(" ").map(Number));
}

for(let q=0;q<3;q++){
    let newArray = [];
    for(let w=0;w<3;w++){
        let newNum = firstArray[q][w]*secondArray[q][w];
        newArray.push(newNum);
    }
    console.log(newArray.join(" "));
}