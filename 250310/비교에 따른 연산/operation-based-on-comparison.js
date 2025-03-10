let fs = require("fs");
const N = fs.readFileSync(0).toString().trim().split(' ');
const a = Number(N[0]);
const b = Number(N[1]);

if(a>b){
    console.log(a*b);
}else{
console.log(Math.floor(b/a));
}