const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let colrow = input[0].split(" ").map(Number);
let col = colrow[0];
let row = colrow[1];

let firstArray = input.slice(1, row+1).map(line => line.split(" ").map(Number));

let secondArray = input.slice(row+1).map(line => line.split(' ').map(Number));


for (let q = 0; q < row; q++) {
    let newArray = [];
    for (let w = 0; w < row; w++) {
        newArray.push(
            firstArray[q][w] === secondArray[q][w]
                ? 0 : 1)

    }
    console.log(newArray.join(" "));
}


