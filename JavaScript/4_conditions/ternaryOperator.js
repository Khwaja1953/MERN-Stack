//ternary operator syntax
// condition ? expression if true : expression if false
let age = 20;
// if (age >= 18){
//     console.log("you can drive");

// }
// else{
//     console.log("you can not drive");
// }


//ternary operator
age = 59;
age >= 18 ? console.log("you can drive") : console.log("you can not drive")

// nested ternary operator
age >= 18 ? age <= 60 ? console.log("you can drive") : console.log("your age is above 60") : age >= 16 ? console.log("you can drive bike") : console.log("you can not drive")

//ladder ternary operator
age >= 18 ? console.log("you can drive") : age >= 16 ? console.log("you can drive bike") : age >= 10 ? console.log("you can drive cycle") : console.log("you can not drive")