// try {

// setTimeout(()=>{
//     console.log("first timeout finishedd")
//     setTimeout(()=>{
//         console.log("second timeout finished")
//         throw new Error("something went wrong...")
//         setTimeout(()=>{
//             console.log("thired timeout finished...")
//             setTimeout(()=>{
//                 console.log("finished task")
//             },2000)
//         },3000)
//     },1000)
// },2000)

    
// } catch (error) {
//     console.log(error.message);
    
// }
// finally{
//     console.log("task finished end of program")
// }
// console.log("starting program...")
// function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let x = Math.random();
//             console.log(x);
//             if (x > 0.5){reject("something went wrong ")}
//             resolve("data fetched successfully.....")
//         },2000)
//     })
// }
// getData().then(res => {console.log(res)}).catch(err =>{console.error(err)});
// // console.log(getData())
// console.log("End of program....")


let data = Promise.resolve(Math.random());
data.then(res => (res*1000 + 1000))
.then(res => parseInt(res))
.then(res =>{console.log(res)})
.catch(err =>{console.log(err)})