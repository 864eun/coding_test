const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let N = Number(input[0]);
let M = Number(input[1]);

for(let i = 0; i<N; i++){
    let str = "";
    for(let i = 0; i<M; i++ ){
        str += "* "
    }
    console.log(str);
}