let num1 = 0; //1 1
let num2 = 1; //1 2
let newNum = 0;//1 2
console.log(num1);
console.log(num2);
for (let i = 0; i < 15; i++){

    newNum = num1 + num2;
    num1 = num2;
    num2 = newNum;
    console.log(newNum);


}

//0 1 2