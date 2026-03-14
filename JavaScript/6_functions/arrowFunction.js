const greet = () => { return "Hello world...."; }
console.log(greet());

//only for one line
const greet2 = () => "Hi world...";
console.log(greet2());


const greet3 = () => {
    console.log("hey world...")
};
console.log(greet3());

const square = (n)=> n*n
console.log(square(5));


//callback function
function xyz(n, abc){
    return abc(n);
}


console.log(xyz(5,square));

//constructor function
function Person(name, age){
    this.name = name;
    this.age = age;
}

const user1 = new Person("muzamil", 25);
console.log(user1);
const user2 = new Person("saijdeep", 20);
console.log(user2);

//rest parameter
function sum(...num){
    console.log(num);
    let sum = 0;
    for (let i of num){
        sum += i;
    }
    return sum
}

console.log(sum(3,6));

//recursive function
const factorial = (n) => {
    if (n <= 1)return 1;

    return n * factorial(n-1);
}
console.log(factorial(5));