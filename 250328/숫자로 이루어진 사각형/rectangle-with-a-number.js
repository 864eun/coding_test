const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.

function printSquare(){
    let cnt = 1;
    for(let q=0;q<N;q++){
        for(let w=0;w<N;w++){
            process.stdout.write(cnt + " ");
            cnt++;
            if(cnt === 10){
                cnt = 1;
            }
        }
        process.stdout.write("\n");
    }
}

printSquare(N);