const obj = {name:"muzamil",
    address: "handwara",
    city: "abc"
}
const {name,address} = obj;
const {city} = obj;
console.log(name,address)
console.log(city)


const arr = ["apple","orange","banana"]
const [fruit1,fruit2] = arr
console.log(fruit1,fruit2)




const math = require('./file')
console.log(math)
const {addition,multiplication} = math
console.log(addition(5,4))
console.log(multiplication(3,4))
console.log(math.division(5,2))
console.log(math.greet)
const {greet} = math
console.log(greet)

const data = require('./file2')
console.log(data)
const {name1, address1} = data;
console.log(name1,address1)