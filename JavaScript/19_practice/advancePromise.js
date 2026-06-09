Promise.allSettled([
    Promise.resolve("p1 resolved"),
    Promise.resolve("p2 resolved"),
    Promise.reject("P3 rejecteds")
]).then(res =>{console.log(res)}).catch(err=>{console.log(err)})


Promise.any([
    new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("p1 resolved")},5000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>{reject("p2 rejected")},2000)
    })
]).then(res=>{console.log(res)}).catch(err => {console.log(err)}).finally(()=>{console.log("i will run i am finally")})