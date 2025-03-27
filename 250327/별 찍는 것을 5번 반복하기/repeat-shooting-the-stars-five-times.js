function starPrint(){
    for(let i=0;i<10;i++){
        process.stdout.write('*');
    }
    process.stdout.write('\n');
};

for(let q=0;q<5;q++){
    starPrint();
}