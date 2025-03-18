const fs = require("fs");
let input  = fs.readFileSync(0).toString().trim().split("\n");
let N = Number(input[0]);

for(let i=1; i<=N;i++){
    let M = input[i].split(" ");
    let a = Number(M[0]);
    let b = Number(M[1]);
    let sum = 0;
    for(let j=a; j<=b; j++){
        if(j%2===0){
            sum += j;
        }
    }
    console.log(sum);
    
}