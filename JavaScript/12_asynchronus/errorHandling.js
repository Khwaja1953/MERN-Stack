function divide(callback, a,b){
    if (b == 0){
        callback("can not divide by zero",null)
    }
    else{
        callback(null, a/b);
    }
}

function result(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result)
    }
}
divide(result,5,2);