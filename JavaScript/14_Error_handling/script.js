try{

    const a = b;
    console.log(a);
}catch(e){
    console.log("we have got some error please try again")
}
console.log("hello world")

try {
    const x = "hello world"
    const num = x.find('z');
    console.log(num);
}catch(err){
    console.log("error",err)
}
finally{
    console.log("i am finally")
}

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