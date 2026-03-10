let num = 2;
switch(num){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Incorrect value");
}


let num1 = Number(prompt("Enter 1st number"))
let num2 = Number(prompt("Enter 2nd number"))
let op = prompt("chose operator + - * / % **")
let result;

switch(op){
    case "+":
        result = num1 + num2 ;
}

alert(result);