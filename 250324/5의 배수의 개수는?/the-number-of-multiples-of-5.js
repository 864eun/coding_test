const fs=require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let newArray = [];
for(let i = 0;i<4;i++){
    newArray.push(input[i].split(" ").map(Number));
}

let total = 0;
for(let q=0;q<4;q++){
    for(let w=0;w<4;w++){
        if(newArray[q][w]%5===0)
        total ++;
    }
}
console.log(total);