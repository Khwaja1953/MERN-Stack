const evenOdd = new Promise((resolve, reject)=>{
    let num = 5;
    setTimeout(()=>{
        if (num%2==0){
        resolve("This is an even number")
    }
    else{
        reject("This is an odd number")
    }

    },2000)
    
});

evenOdd.then(message => {console.log(message)})
.catch(error => {console.log(error)})
console.log(evenOdd)


// Promise.race([
//     Promise.resolve("tested ok ok"),
//     Promise.resolve("tested ok"),
//     evenOdd

// ]).then( data => {console.log("all promise",data)})
// .catch(error => { console.log("this is errror of promise all",error)})
// .finally(()=>{console.log("i will run either the promise resolves or rejects")})



async function greet() {

  let response =   await fetch('https://jsonplaceholder.typicode.com/todos/1')
   response  = await response.json();
   console.log(response)
    console.log("hello user")
    
}
greet()
console.log("hii......")