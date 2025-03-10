const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

if (input<0)
    console.log(`ice`);
else if(input>=100) 
    console.log(`vapor`);
else 
    console.log(`water`);
