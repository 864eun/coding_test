const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

// Please write your code here.
function getNum(){
    for(let i=0; i<m; i++){
        let total = 0;
        let firNum = queries[i][0]-1;
        let secNum = queries[i][1]-1;

        for(let q=firNum; q<=secNum; q++){
            total += A[q];
        }
        console.log(total);
    }
}

getNum();

