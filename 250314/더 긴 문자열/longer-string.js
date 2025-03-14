const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
let A = input[0];
let B = input[1];

if(A.length === B.length){
    console.log(`same`);
} else if(A.length > B.length){
    console.log(A, A.length);
} else {
     console.log(B, B.length);
}