const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
function getPrime(n, m) {
    let total = [];
    for (let i = n; i <= m; i++) {
        let count = 0;
        
        for (let q = 1; q <= i; q++) {
            if (i % q === 0) count++;
        }
        if (count === 2) {
            total.push(i);
        }
    }
    return total;
}

function getEvenNumber(a) {
    let oneNum = 0;
    let tenNum = 0;

    oneNum = a % 10;
    tenNum = Math.floor(a / 10);

    if ((oneNum + tenNum) % 2 === 0) return a;
    else return 0;

}


function getNumber(A, B) {
    let nums = getPrime(A, B);
    let count = 0;

    for (i = 0; i <= nums.length; i++) {
        if (getEvenNumber(nums[i]) === nums[i]) {
            count++;
        }
    }
    return count;
}

console.log(getNumber(A, B));