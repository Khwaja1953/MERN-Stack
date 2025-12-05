//types
//name function
function Add(x,y){
return x+y
}
let result = Add(3,4)
console.log(result);
console.log(Add(4,6))

//annomious function
let multiply = function (x,y){
    return x*y
}
console.log(typeof(multiply))
console.log(multiply(4,5))


//arrow function
const sub = (x,y)=> {
    console.log('This is an arrow function ')
    let result = x-y;
    return result
}
console.log(typeof(sub))
console.log(sub(6,5))

const sqr = (x)=> x*2
console.log(sqr(2))

//callback function
function num(x,y){
return(x+y(x))

}

const num2 = (n)=> n**2

console.log(num(4,num2))



let greet = (user)=> {console.log("hello",user)}
greet('ishfaq')

const x1 = (x)=>{console.log(x)}


function square(n){
    return n**2
}

let num = square(2);
console.log(num)


let num = (n) => n**2
console.log(num(2))

// function factorial(a,b){
//     return a * b(a)
// }
// function xyz(n){
//     return n - 1
// }
// result = factorial(3,xyz)
// console.log(result)


const factorial = (n)=>{
    if (n <= 1){
        return 1
    }

    return n*factorial(n-1)
}
result =factorial(5)



function ishfaq(...data){
    sum = 0
for(i = 0; i<data.length;i++){
    sum += data[i];
}
console.log(sum)
}
ishfaq(2,3,4,7,8,9)


const fac = (x,y)=> {
    if (x <= 1) return 1
  return  x*y(x-1,y)}

console.log(fac(10,fac))


function even(n){
    console.log("the number is even",n)
}
function odd(n){
    console.log("THe number is odd",n)
}
function evenodd(n){
    if(n%2===0){
        even(n)
    }
    else{
        odd(n)
    }
}

evenodd(967)