const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.

function getNum(a,o,c){
    if( o === '+') return a + c;
    if( o === '-') return a - c;
    if( o === '/') return a / c;
    if( o === '*') return a * c;
    else return 'False' ;
}

function getResult(a,o,c){
    if(o === '+'|o === '-'| o === '/'| o === '*'){
        console.log(input + ' = ' + getNum(a,o,c));
    }
    else console.log(getNum(a,o,c));
};

getResult(a,o,c);

