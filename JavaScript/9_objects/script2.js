//rest parameter
const add = (sum,...args)=>{
    console.log(args)
    for (let i = 0; i< args.length; i++){
        sum += args[i]
    }
    console.log("The sum is ",sum)
}

add(100,1,2,3,4,76,34,23)

//spread operator 
arr1 = [1,2,3,4,5,6]
arr2 = arr1 + [7,8,9,10]
console.log(arr2)
console.log(...arr1)
arr2 = [...arr1,7,8,9,10]
console.log(arr2)

const obj = {
    name1: "farhan",
    address1: "srg"
}
const obj1 ={
    name2: "ishfaq",
    address2: "srg"
}
const obj2 ={...obj,...obj1}
console.log(obj2)