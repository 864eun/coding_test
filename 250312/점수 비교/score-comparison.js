const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let A = input[0].split(' ');
let B = input[1].split(' ');

let aMath = Number(A[0]);
let aEng = Number(A[1]);

let bMath = Number(B[0]);
let bEng = Number(B[1]);


if(aMath>bMath && aEng>bEng){
    console.log(1);
} else {
        console.log(0);
} 

