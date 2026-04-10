const greet = (user)=>{
    console.log(user ? `Hello ${user}`: "Hello user")
}
const welcome = (user)=>{
    console.log(user ? `Welcome ${user}`: "Welcome user")
}
export const hello = (user)=>{
    console.log(user ? `Hello ${user}`: "Hello user")
}

export  {greet, welcome}