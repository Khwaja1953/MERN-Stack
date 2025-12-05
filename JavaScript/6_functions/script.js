// let x = 5;
// let y = 6;
// let z = x + y;
// console.log("The value of ", x, "+", y, "=", z);

// x = 10;
// y = 15;
// z = x + y;
// console.log("The value of ", x, "+", y, "=", z);

// x = 20;
// y = 30;
// z = x + y;
// console.log("The value of ", x, "+", y, "=", z);

function add(x,y){//x,y are parameters
    let z = x + y;
    console.log("The value of ", x, "+", y, "=", z);
    return z
    
}
add(5,4)//5,4 arguments
add(10,15)
let result = add(65,90)
console.log(result)
add(34,23)

function greet(name = "guest"){//default parameter
    console.log("Hello ",name);
}
greet("muzamil");
greet('ishfaq');
greet();