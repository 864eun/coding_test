const fs = require("fs");
const a = Number(fs.readFileSync(0).toString().trim());
console.log(a.toFixed(2));