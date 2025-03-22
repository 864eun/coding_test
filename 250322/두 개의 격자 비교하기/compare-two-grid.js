const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let a = input[0].split(" ").map(Number);
let col = a[0];
let row = a[1];

let firstArray = [];
for(let i=1; i<=col;i++){
    firstArray.push(input[i].split(" ").map(Number));
}

let secondArray = [];
for(let i=1+col; i<=col+col;i++){
    secondArray.push(input[i].split(" ").map(Number));
}

for(let q=0;q<col;q++){
    let total = [];
    for(let w=0;w<row;w++){
        if(firstArray[q][w]===secondArray[q][w]){
            total.push(0);
        }else {
            total.push(1);
        }
    }
    console.log(total.join(" "));
}