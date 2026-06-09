let data = {
    name: "ishfaq",
    address: "srinagar"
}
console.log(data);
// data.phone = 123;


let result = {...data,phone: 123}
console.log(result);

function greet(...x){
for (let i of x){
    console.log(i)
}
}
greet("hello","world","good")