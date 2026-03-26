let arr = [1,2,3,4,5,6,7,8];
let sum = arr.reduce((x,y)=>{
    console.log(x,y);
    return x + y
},0);
console.log(sum);

arr = [54,23,76,12,98,12,23,90];
let num = arr.reduce((x,y)=> y > x ? y: x);
console.log(num);


//find
console.log("find methods from here")
num = arr.find((x,y)=>{
    console.log(x,y);
    return x == 12});
console.log("find method ",num);

let users = [
  { id: 1, name: "Ayaan Khan", age: 22 },
  { id: 2, name: "Zara Ali", age: 25 },
  { id: 3, name: "Rohan Sharma", age: 28 },
  { id: 4, name: "Fatima Noor", age: 21 },
  { id: 5, name: "Arjun Mehta", age: 30 },
  { id: 6, name: "Sara Ahmed", age: 24 },
  { id: 7, name: "Kabir Singh", age: 27 },
  { id: 8, name: "Mehak Gupta", age: 23 }
];
//return user whose age is greater than 25
//some
let result = arr.some((num)=> num < 0);
console.log(result);

result = arr.every((x)=> x>12);
console.log(result)

//loop
arr.forEach((ele, index, array)=>{
console.log(ele,index,array);
});
console.log(result)