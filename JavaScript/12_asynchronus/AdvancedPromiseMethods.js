// const checkEven = new Promise((resolve,reject)=>{
//     let num = 5;
//     setTimeout(()=>{

//         if (num%2 == 0){
//             resolve("this is an even number")
//         }
//         else{
//             reject("this ia an odd number")
//         }
//     },2000);
// });
// console.log(checkEven);
// setTimeout(()=>{
//     console.log(checkEven)
// },3000);

// checkEven.then(message => {console.log(message)}).catch(error => {console.log(error)});

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("data fetched from database1")
        // reject("something went wrong in database 1")
    },2000)
});
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("data fetched from database2")
        // reject("something went wrong")
    },5000)
});

// Promise.all([
//     p1,p2
// ])
// .then(res => {console.log(res)})
// .catch(error => {console.error(error)});

// Promise.allSettled([p1,p2])
// .then(res => {console.log("promise all settled",res)})

// Promise.race([p1,p2]).then(res => {console.log("promise race",res)}).catch(err => {console.log("race",err)});

// Promise.any([p1,p2]).then(res => {console.log("any ",res)}).catch(err => {console.log(err)});

// Promise.resolve("promise resolved").then(res => {console.log(res)}).catch(err => {console.log(err)}).finally(()=>{console.log("i will run even if promise resolves or rejects..")});



let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let num1 = 5;
        let num2 = 4
        resolve(num1 + num2);
    },2000)
});

p3.then(res => res * 2)
.then(res => {console.log(res)})
.catch(err =>{console.log(err)})

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(res => {console.log(res)})
.catch(err => {console.log(err)})