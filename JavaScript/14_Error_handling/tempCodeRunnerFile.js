const age = 15;
try{
    if (age < 18){
        throw Error("you can not vote")
        
    }
    console.log("you can vote")
}catch(e){
    console.log(e)
}
console.log("end")