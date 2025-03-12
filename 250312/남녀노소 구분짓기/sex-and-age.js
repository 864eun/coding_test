const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
let gender = Number(input[0]);
let age = Number(input[1]);

if(age >= 19){
    if(gender === 0){
        console.log(`MAN`);
    } else console.log(`WOMAN`);    
} else {
    if(gender === 0){
        console.log(`BOY`);
    } else console.log(`GIRL`); 
}