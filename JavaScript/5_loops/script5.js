//break continue statement
for (let i = 0; i < 10; i++){
    console.log(i);
   if (i == 5)break;
}
console.log("nested loop");
for (let i = 0 ; i < 10; i++){

    for (let j = 0; j< i; j++){
        console.log("hello world",j);
        if (j == 2)break;
    }
}


////continue
console.log("continue statement");
for (let i = 0; i< 10; i++){
    if (i == 5 ){
        continue;
    }
    console.log("hey ",i);
}