const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

score = "";

for (let i = 0; i <= (100 - input); i++) {
    addInput = input + i
    if (addInput >= 90) {
        score += "A ";
    } else if (addInput >= 80) {
        score += "B ";
    } else if (addInput >= 70) {
        score += "C ";
    } else if (addInput >= 60) {
        score += "D ";
    } else {
        score += "F ";
    }

}
console.log(score);