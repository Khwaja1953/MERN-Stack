let name = 'muzamil';
function greet(name="user"){
    //body
    console.log("Hello ",name);
    
    //return 
}
// greet('khwaja');

function sum(x=0,y=0){
    return x+y
    console.log("Hello world");//will not execute
}

// console.log(sum(7,12));
result = sum(7);
console.log(result);

function test(x){
   if (x % 2 == 0){
    return "This is even number";
   }
   else{
    return "This is odd number";
   }
}
console.log(test(4));

//anonymous function
let xyz = function (){
    console.log("Hello world");
}

xyz();

//arrow function