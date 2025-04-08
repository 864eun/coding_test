const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.
function reverse(str){
    let newArray = ""
    for(let q=str.length-1;q>=0;q--){
        newArray+=str[q]
    }
    if(str===newArray) return 'Yes'
    else return 'No';
}

console.log(reverse(str));