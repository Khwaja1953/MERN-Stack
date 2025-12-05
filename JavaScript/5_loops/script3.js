let obj = {
    name: "muzamil",
    address: "handwara",
    phone: 1234,
    subject: "MERN"

}
// console.log("My name is",obj.name);
// console.log("I live at ",obj["address"]);
// console.log("My phone number is ",obj["phone"]);

let name = "khwaja";
// console.log(name[0]);
// console.log(obj[0]);


// for (i=0;i<6;i++){
//     console.log(name[i])
// }

for (i in obj) {
console.log(i,obj[i]);
}

name = "muzamil";
for (i in name){
    console.log("index is ",i," and value is ",name[i]);
}

for (i of name){
    console.log(i);
}

let obj1 = {
    name: "abc",
    address: "xyz",
    rollNo: 23,
    course: "pqr"
}
obj1.name = "def"
obj1["name"] = "def"
console.log(obj1.name)