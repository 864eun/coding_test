const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

result=[];
for(let i=1; i<=input; i++){
    if(i%2===0 || i%3===0 || i%5===0){
        continue}
    else 
        result.push(i);
}

console.log(result.length);
