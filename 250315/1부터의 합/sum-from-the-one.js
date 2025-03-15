const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());
let result = 0;
let i ;

for(i=1;i<100;i++){
    result += i;
    if(result > input)
        break;
}
console.log(i);