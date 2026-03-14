let arr = [];
console.log(arr);
arr = [1,2,3,4];
console.log(arr);
arr = [1,2.2,"apple"];
console.log(arr);

let arr1 = new Array(1,2,3,4);
console.log(arr1);
let arr2 = new Array(5);
console.log(arr2);

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[5]);

last = arr.length
console.log(arr[last - 1]);
console.log(arr[arr.length - 1])

arr[1] = "banana";
console.log(arr);

const arr3 = ['apple','banana'];
arr3[0] = "Pear";
console.log(arr3)
// arr3 = ["Grapes", "apple"];


console.log("push",arr3.push("mango"));//returns new length
arr3.push("apple","tomato");
console.log(arr3);

console.log(arr3.pop());//returns poped element
console.log(arr3);

arr3.unshift("tomato");
console.log(arr3);

arr3.shift();
console.log(arr3);

let arr4 = arr3.concat(arr1);
console.log(arr4);

arr4 = [...arr3, ...arr1];// ["apple","pear",1,2,3]
console.log(arr4.toString());
console.log(arr4.join(" "))
console.log(arr4.indexOf("apple"));
console.log(arr4.indexOf("tomato"));