console.log("hello world")
async function greet(){
    console.log("before await")
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    response = await response.json()
    console.log("after await")
    console.log("using await",response)
}

greet()
console.log("end")

const getData = ()=>{
    fetch("https://jsonplaceholder.typicode.com/todos/1",{
        method: "GET"
    }).then(data => data.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
getData()