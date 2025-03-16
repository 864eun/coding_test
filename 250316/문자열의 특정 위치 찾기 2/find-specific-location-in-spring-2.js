const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let words =["apple", "banana", "grape", "blueberry", "orange"];
count = 0;

for(let i = 0; i<words.length; i++){
    if(words[i][2]===input ||words[i][3]===input){
        console.log(words[i]);
        count++;
    }
}

console.log(count);




