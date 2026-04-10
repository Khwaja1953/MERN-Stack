let age = -15;
try {
    
    if (age > 18){
        console.log("he is eligible for driving")
    }
    else if (age <=0){
        throw new Error("invalid age....")
        
    }
    else{
        console.log("Not eligible for driving..")
    }
} catch (error) {
    console.log("error is here")
    console.log(error.stack)
    console.log(error.message)
    console.log(error.name)
}
finally {
    console.log("i will run either error occurs or not")
}


console.log("End of program")

