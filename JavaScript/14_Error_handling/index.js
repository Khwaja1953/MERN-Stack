console.log("Hello world...");
num1 = 5;
num2 = 0;
if (num2 != 0){
    console.log(num1/num2)
}
else{
    try{

        throw Error("Can not divide by zero");
    }
    catch(error){
        console.log(error.message);
    }
}
console.log("End of program....")