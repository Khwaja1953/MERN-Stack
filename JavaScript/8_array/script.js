const firstName = "khwaja";
const secondName = "muzamil";
console.log(firstName,secondName)

let arr = ["apple","orange", "banana"]
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])

let arr1 = [10,20,30,35,45]
console.log(arr1)
let x = "girl"
let arr2 = ["apple", 20,30,"boy","cat",x,43.2]
console.log(arr2)

//using constructor
let arr3 = new Array(12,"farhan","ishfaq","cat",32);
console.log(arr3)

let cm = new Array("ishaq","farhan");
console.log(cm)
console.log(cm[0]);
console.log(cm[1]);
cm[0] = "khwaja"
console.log(cm)
console.log(cm[2])
//adding element to an array
cm[2] = "ishfaq"
console.log(cm)
//adding element at the last of an array
cm.push("muzamil")
console.log(cm)
cm.push("sofia","mahrukh")
console.log(cm)
//adding element at the begining of an array
cm.unshift("falkie")
console.log(cm)
cm.unshift("sahil","burhan")
console.log(cm)

//removing element from an array at last
cm.pop()
console.log(cm)

//removing element from an array at begining
cm.shift()
console.log(cm)


//create empty array and add these elements (falkie, farhan, ishfaq, muzamil)
// and then remove first and last element and add this element at index 0 (khwaja)
// result => khwaja, farhan, ishfaq 

arr = ["apple","cat","dog",'bird','boy','girl','man']
console.log(arr)

//length of an array
console.log(arr.length)

console.log(arr[arr.length - 1])

console.log(arr.length)

//increasing length
arr.length = 10;
console.log(arr.length)
console.log(arr[arr.length-1])
arr.push("farhan")
console.log(arr)
arr[7] = "banana"
arr[8] = 'orange'
console.log(arr)
arr.pop()
arr.pop()
console.log(arr)

//decrease length
console.log(arr.length)
arr.length = 5;
console.log(arr.length)
console.log(arr)
console.log(arr[5])

//concat
arr1 = ["khwaja"]
arr2  = ["muzamil"]
arr3 = arr1.concat(arr2)
console.log(arr3)

//conversion to string

str = arr3.toString()
console.log(str)

//join 
arr = ["apple","cat","dog",'bird','boy','girl','man']
console.log(arr.join("|"))

//delete operation
console.log(arr)
delete(arr[3])
console.log(arr)

//nested array
arr = ["apple", "cat",["boy","girl", "man"],"banana"]
console.log(arr.length)
console.log(arr)
console.log(arr[2][1])

//slicing
arr = ["apple","cat","dog",'bird','boy','girl','man']
console.log(arr.slice(1,5))

//splice(start, deletecount, itemadd)
console.log(arr)
arr.splice(2,2);
console.log(arr)
arr.splice(2,0,"biscuit","choclate","lays")
console.log(arr)
arr.splice(2,3,"milk","coconut")
console.log(arr)

//reverse
arr.reverse()
console.log(arr)


console.log(arr.indexOf("boy"))
arr.splice((arr.indexOf("boy")),1)
console.log(arr)
console.log(arr.includes("boy"))

//task
//remove the last element of an array using splice without knowing the index
//change the 2nd element of an array using splice like if it is boy make it girl
//check if an elemnt is availabe in array if it is found then delete it if not then do nothing

arr = ["boy","cat","dog","apple","orange","banana","rat"]
console.log(arr)
console.log(arr[0])
console.log(arr[1])

for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

console.log("Reverse order:")
let j = arr.length - 1
while(j >= 0){
    console.log(arr[j]);
    j -= 1;
}
console.log("using for of loop")
for (let item of arr){
    console.log(item)
}

console.log("using for in loop")
for (let index in arr){
    console.log(arr[index])
}

console.log("using forEach loop")
let fruits = ["apple","banana","orange",'pear',"walnut","almond"]
fruits.forEach((item,index,array)=>{
console.log(`the item is ${item} and the index is ${index} and the full array is ${array}`)
})
fruits.forEach((_,i)=>{
    console.log(fruits[i])

})
console.log("Nested array")
let items = ["apple","banana",56,["cat",'rat','bat'],"orange",["srinagar","delhi",["india","bangladesh","nepal"]]]
for (let item of items){
    if (typeof(item) == 'object'){
        for (let inneritem of item){
            
            console.log(inneritem)
        }
    }
    else{

        console.log(item)
    }
    
}