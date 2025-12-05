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

const obj1 = new Object();
obj1.name = "khwaja"
console.log(obj1)