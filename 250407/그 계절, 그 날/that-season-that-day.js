const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.

function checkYear(year){
    if(year%4===0&&year%100===0&&year%400===0) return 1;
    if(year%4===0&&year%100===0) return 0;
    if(year%4===0) return 1;
    else return 0;
}

function dayCheck(year,month){
    if(month===4||month===6||month===9||month===12) return 30;
    if(month===2) return checkYear(year)?29:28;
    else return 31;
}

function monthcheck(year, month, day){
    if(month<=12&&day<=dayCheck(year,month)){
        if(3<=month&&month<=5)return 'Spring';
        if(6<=month&&month<=8)return 'Summer';
        if(9<=month&&month<=11)return 'Fall';
        if(12===month||month<=2)return 'Winter';
    }
    else return '-1';
}

console.log(monthcheck(year, month, day));