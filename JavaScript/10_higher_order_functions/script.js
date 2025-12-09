function abc(x, xyz){
    result = xyz(x)
    return result

}
function sqr(x){
    return x**2
}
console.log(abc(4,sqr))

arr = [1,2,3,4,5]
for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] + 2
}
console.log(arr)
//map
function add(n){
    return n + 5
}
arr1 = arr.map(add)
console.log("The actual array is ",arr1)

arr2 = arr.map((n)=> n+50)
console.log(arr2)

let names = ["muzamil","farhan","ishfaq"]
names = names.map((name)=>name.toUpperCase())
console.log(names)

const obj = [{
    name: "appple",
    type: "fruit",
    price: 50
},
{
    name: "orange",
    type: "fruit",
    price: 40
},
{
    name: "walnut",
    type: "dry fruit",
    price: 20
},
{
    name: "banan",
    type: "fruit",
    price: 30
},
{
    name: "almond",
    type: "dry fruit",
    price: 40
}]
const obj1 = obj.map((item)=>{
    // return {name: item.name,type:item.type,price: item.price + 50}
    return {...item,price:item.price + 50}
})
console.log(obj1)
const obj2 = obj1.map((item)=>{
    if (item.type == "fruit"){
        return {...item,price: item.price*2}
    }else{
        return {...item}
    }
});
console.log(obj2)

const obj3 = obj.map((item)=>{
    if (item.price != 20){
        return {...item,price:item.price + 10}
    }
    return {...item}
});
console.log(obj3)

const obj4 = obj.map((item)=>{
    if (item.type == "fruit"){
        return {...item,availbility:true}
    }
    else{
        return {...item,availbility:false}
    }
});
console.log(obj4)

//filter
let n = [1,2,3,4,5,6,7,8,9,10]
let even = n.filter((item)=> item%2==0)
console.log("arry of even numbers is ",even)

const obj5 = obj.filter((item)=> item.type == "fruit");
console.log(obj5)
const obj6 = obj.filter((item)=>item.type == "dry fruit")
console.log(obj6)

const str = ["apple", "banana", "cat", "boy"]//return those elements whose length is greater than 3

//reduce
n = [10,20,30,35,40,3,25]
const n1 = n.reduce((x,y)=>x+y,0)
console.log(n1)

//find
n = [13,3,11,12,9,14,20]
let first = n.find((item)=> item%2==0);
console.log("first even number in array is",first)

let fruit = obj.find((item)=>item.name == "walnut");
console.log(fruit)

names = ["ishfaq","farhan","ali","muzamil"]//using find, find ali in the array

//some
n = [1,3,5,7,9,12]
even = n.some((item)=> item%2 ==0)
console.log(even)
n = [-10,-4,-3,-1,0,-15]
console.log(n.some((item)=>item>=0));
console.log(obj.some((item)=>item.price == 40))

//every
n = [2,4,6,8,10,11]
console.log("every",n.every((item)=>item%2==0))