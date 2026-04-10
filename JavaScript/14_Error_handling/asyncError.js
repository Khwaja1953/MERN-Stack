// fetch("https://www.orderbyqr.in/abc")
// .then(res => {console.log(res)})
// .catch(err => console.error("something went wrong please try again later",err.message))
// .finally(()=>{
//     console.log("thank you for visiting our website...")
// })

// async function fetchData() {
//     try {
//     let res = await fetch("https://www.examplefjdkl.in/abc");
//     // res = await res.json()

// } catch (error) {
//     console.log("Something went wrong......")
// }

// }
// fetchData();

// try {
// const {math} = require('mathes.js')
// console.log(math)
    
// } catch (error) {
//     console.error("module not found")
// }


try {

    let age = 15;
    let num = 0;

    if( age < 18){
        throw new Error("age can not be less than 18")
    }
    if (num == 0){
        throw new Error("number can not be equal to zero")
    }
    
} catch (error) {
    console.error(error.message)
}