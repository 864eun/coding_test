let fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = input[1].split(' ');
N.reverse();

result = "";
for(let i=0; i<N.length;i++){
    if(N[i]%2===0){
        result += `${N[i]} `;
    }
}
console.log(result);
