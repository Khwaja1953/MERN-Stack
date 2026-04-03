let evenOdd = new Promise((resolve, reject)=>{
    let num = 5;
    setTimeout(()=>{

        if (num%2==0){
            resolve("This is an even number")
        }
        reject("This is an odd number...")
    },1000)
});

evenOdd.then(res => {console.log("resolved",res)}).catch((err)=>{console.error(err)});