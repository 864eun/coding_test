const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.

function lastDayCheck(m){
    if(m===2) return 28;
    if(m===4||m===6||m===9||m===11) return 30;
    else return 31;
}

function dayCheck(m, d){
    if(m<=12&&d<=lastDayCheck(m)){
        return 'Yes';
    }
    return 'No';
}

console.log(dayCheck(m, d));