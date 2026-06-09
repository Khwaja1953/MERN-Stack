let checkEven = new Promise((resolve,reject)=>{
    let num = 4;
    setTimeout(()=>{
        if (num%2==0){
            resolve("this is even number")
        }
        else{
            reject("this is odd number")
        }
    },2000)
});
console.log("Hello world");

checkEven.then(res=>{console.log(res)}).catch(err=>{console.log(err)})

console.log(checkEven)



console.log("End of program")

setTimeout(()=>{console.log(checkEven)},3000)