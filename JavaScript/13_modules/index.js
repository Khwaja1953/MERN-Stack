let name1 = "saijdeep"
let address2 = "srinagar"
// const body = {name,address}
const body = {name: "saijdeep", address: "srinagar"}
// const body = {name: "saijdeep",address}

// const obj = body;
// console.log(obj.name,obj.address);
// const {name, address} = body;
// console.log(name, address);

const arr = ['saijdeep','kour'];
const [firstName, lastName] = arr;
console.log(firstName,lastName);


const data = {name: "saijdeep",address: {houseNo: 32,lane:"srg"}}
const {name,address} = data;
const {houseNo, lane} = address;
console.log(name, houseNo,lane);