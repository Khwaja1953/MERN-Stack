const obj = {
    name: "muzamil",
    address: "handwara",
    rollNo: 26,
    hobby: ["cricket", "chess"]
}
obj.phone = "1234567890"

console.log(obj)
console.log(obj.rollNo)
obj.rollNo = 25
console.log(obj)
delete(obj.phone)
console.log(obj)
console.log(obj['name'])

const obj1 = new Object();
obj1.name = "khwaja"
console.log(obj1)


console.log("value with loops")
for (let value of Object.values(obj)){
    console.log(value)
}

console.log("keys with loops")
for (let key of Object.keys(obj)){
    console.log(key)
}

console.log("entries with loops")
for (let entrie of Object.entries(obj)){
    console.log(entrie)
}

for (let key of Object.keys(obj)){
    console.log(`${key}: ${obj[key]}`)
}