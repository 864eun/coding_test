const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.
function isSame(n) {
    for (let i = 0; i < n2; i++) {
        if (a[i + n] !== b[i]) {
            return false;
        }
    }

    return true;
}

// b가 a의 연속부분수열인지 확인합니다.
function isSubsequence() {
    for (let i = 0; i < n1 - n2 + 1; i++) {
        if (isSame(i)) {
            return true;
        }
    }
    
    return false;
}

if (isSubsequence()) {
    console.log("Yes");
}
else {
    console.log("No");
}
