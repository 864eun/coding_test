const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.

function divArray(arr){
    for(let q=0; q<n;q++){
        if(arr[q]%2===0) arr[q]=parseInt(arr[q]/2);
    }
    console.log(arr.join(" "));
};

divArray(arr);
