function A(){
    B()
}
function B(){
    console.log(a)
    C()
}
function C(){
    throw Error("error occured in c")
}
try{
    A()
}catch(error){
    console.log(error.message)
    console.log(error.name)
    // console.log(error.stack)
}
console.log("program is still running....")

const fetchData = async ()=>{
    try{

        const response = await fetch("https://www.orderbyqr.inn")
        const data = await response.json();
        console.log(data)
    }catch(error){
        console.log(error.message)
    }
    
}
fetchData()

function data(){
    fetch("https://jsonplaceholder.typicode.co/todos/1",{
        method: "GET"
    })
    .then(falkie => falkie.json())
    .then(falkie => console.log(falkie))
    .catch(ishfaq => console.log("modern error",ishfaq.message))
}
data()
console.log("end")

async function abc() {
    setTimeout(()=>{
        console.log("end function")

    },1000)
}
abc()