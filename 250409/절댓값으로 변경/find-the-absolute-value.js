const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.
function getNum(n,arr){
    for(let i=0; i<n;i++){
        if(arr[i]<0){
            arr[i]=Math.abs(arr[i]);
        }
    }
}
getNum(n,arr);
console.log(arr.join(" "));
