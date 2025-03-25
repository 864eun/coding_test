const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

let newNum = "";
for(let i=1; i<=input; i++){
    newNum+=i;
}

for(let q=1; q<=input; q++){
    if(q%2===0){
        let reverseNum = "";
        for(let w=input-1; w>=0; w--){
            reverseNum+=newNum[w];
        }
        console.log(reverseNum)
    }
    else {
        console.log(newNum);
    }
}