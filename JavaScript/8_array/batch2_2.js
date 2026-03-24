const arr = [0,1,2,3,4,5,6,7,8,9];
console.log(arr.slice(2,5));
console.log(arr);

//splice(start, deleteCount, addElements)
//using as delete
arr.splice(2,1);
console.log(arr);
//using as add elements
arr.splice(2,0,2);
console.log(arr);

//updating
arr.splice(5,3,25,26,27);
console.log(arr);
arr.splice((arr.length - 2), 2);
console.log(arr);

arr.reverse();
console.log(arr);
console.log(arr.toReversed());
console.log(arr);

arr.sort((x,y)=> x-y);
console.log(arr);

//toSorted

//nested array
arr.push([1,2,3]);
console.log(arr);
console.log(arr[arr.length-1][1])
console.log(arr);
console.log(arr.flat());
const flattedArray = [];


//Array.isArray()
let x = 23;
let y = "24";
let z = [25];
console.log(Array.isArray(x),Array.isArray(y),Array.isArray(z));


for (let [index,value] of arr.entries()){
    console.log(index,value);
}

for (let i of arr.keys()){
    console.log(i);
}
for (let i of arr.values()){
    console.log(i);
}