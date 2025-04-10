const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
// Please Write your code here.

function getNum(a,b){
    if(a>b){
        a*=2;
        b+=10;
    }
    else if(a<b){
        a+=10;
        b*=2;
    }
    return[a,b];
}

let [q,w] = getNum(a,b);
console.log(q,w);