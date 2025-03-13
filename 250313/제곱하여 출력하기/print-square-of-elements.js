const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
let N = input[1].split(' ').map(Number);

for(let i=0; i<N.length;i++){
    N[i]=(N[i]*N[i]);
}
console.log(N.join(' '))