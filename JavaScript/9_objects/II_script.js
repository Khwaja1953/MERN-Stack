const obj = {
    name: "saijdeep",
    address: "srinagar",
    email: "abc@gmail.com"
}
console.log(obj);
// const phone = 9906;
const obj1 = new Object();
obj1.name = "saijdeep";
obj1['phone'] = 1234;

console.log(obj1);

obj.name = "saijdeep kour";
console.log(obj);

console.log(obj.name);
console.log(obj["address"]);

delete obj.email;
console.log(obj);

obj.address = {houseNo: 32, street: "lal chowk", state: "j&k"};
console.log(obj);
console.log(obj.address);
console.log(obj.address.street);
console.log(obj.homeAdrress?.address);

console.log("name" in obj);

for (let key in obj){
    console.log(key);
    console.log(obj[key]);
}
for (let value of Object.values(obj)){
    console.log(value);
}
for (let key of Object.keys(obj)){
    console.log(key);
}

for (let key of Object.entries(obj)){
    console.log(key[0]);
    console.log(key[1]);
}


const obj2 = {id: 1, ...obj, ...obj1};
console.log(obj2)
const arr = [obj, obj1, obj2];
console.log(arr);