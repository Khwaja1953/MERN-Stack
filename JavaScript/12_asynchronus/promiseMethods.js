console.log("script running....")
let even = new Promise((resolve,reject)=>{
    let num = 3;
    if (num%2==0){
        resolve("first promise resolved")
    }
    else{
        reject("first promise rejected")
    }
});
let odd = new Promise((resolve,reject)=>{
    let num = 5;
    setTimeout(()=>{
        if (num%2==1){
        resolve("2nd promise resolved")
    }
    else{
        reject("2nd promise rejected")
    }
    },5000)
    
});

Promise.all([even,odd]).then(message => console.log("both resolved",message)).catch(error => console.log("rejected"))
Promise.allSettled([even,odd]).then(message => console.log("allsetelled method",message))
Promise.race([even,odd]).then(m => console.log(m))
Promise.any([even,odd]).then(m => console.log("any method",m)).catch(e => console.log(e)).finally(()=>{console.log("finally runned")})