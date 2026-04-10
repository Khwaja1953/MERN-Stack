const greet = (user)=>{
    console.log(user ? `Hello ${user}`: "Hello user");
}
const welcome = (user)=>{
    console.log(user ? `welcome ${user}`: "Welcome user");
}
const hello = ()=>{
    console.log("hello")
}
const data = {
    name: "saijdeep",
    address: "srinagar"
}

module.exports = {greet, welcome, fun: hello, data}