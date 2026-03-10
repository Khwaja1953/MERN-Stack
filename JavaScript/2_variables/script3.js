//premitive data types
//number
let abc = 10;
console.log(typeof(abc));
abc = 10.5;
console.log(typeof(abc));

//string
let s = "a";
console.log(typeof(s));
s = 'hello world';

//boolean
const b = true;
console.log(typeof(b));


//null
let n = null;
console.log(typeof(n));

//undefined
let x;
console.log(typeof(x));


//non primitive
//object
const obj = {
    name: "muzamil",
    address: "handwara"
}
console.log(typeof(obj));

//array
let arr = [2,3,4,5];
console.log(typeof(arr))


// stack vs heap
let num = 40;
let num2 = num;
console.log(num,num2);
num = 50;
num2 = 60;
console.log(num,num2);


const arr1 = [1,2,3,4];
const arr2 = arr1;
console.log(arr1,arr2);
arr1[0] = 100;
arr2[1] = 200;
console.log(arr1,arr2);
