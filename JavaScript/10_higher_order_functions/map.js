const arr = [10,21,33,84,5,60,7,8];
// console.log(arr[0]);
// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

let mappedData = arr.map((item,index)=>{
    // console.log("hello",item,index);
    return item * index;
});
console.log(mappedData);

let names = ["saijdeep", "muzamil", "khwaja"];
names = names.map((item)=> item.toUpperCase());
console.log(names);

let data = [{name: "saijdeep",address: "srinagar"},{name: "muzamil",address: "handwara"}];
let onlyNames = data.map((item)=>  { return {name: item.name}});
console.log(onlyNames);


let nums = [1,2,3,4,5,6,7,8];
nums = nums.map((item)=>{
    if (item%2 == 0)return item
});
console.log(nums);
//filter
nums = nums.filter((item)=> item%2==0);
console.log(nums);

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
users = users.filter((item)=>  item.age < 25);
console.log(users);

nums = [1,2,3,4,5,6,7,8];
nums = (nums.filter((item)=> item%2==0)).map((item)=> item**2);
nums = (nums.map((item)=> item**2)).filter((item)=> item%2==0);
console.log(nums);