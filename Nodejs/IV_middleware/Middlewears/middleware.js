export const dataChecking = (req, res, next)=>{
    // return res.send("bye bye")
    if (req.body.name == 'tom'){
        return res.send("you are not valid user")
    }
    console.log(req.body);
    next()
}
// blocking code
export const blocking = (req,res,next)=>{
    console.log("i am next middlewear this is blocking middlewear");
    
    let sum = 0;
    for (let i = 0; i <= 10000000000;i++){
        sum += 1
    };
    next()
}


//non blocking code
export const non_blocking = (req,res,next)=>{

    setTimeout(()=>{let sum = 0;
    for (let i = 0; i <= 1000000000;i++){
        sum += 1
    };},0);
    next()
}

export const profileMiddleware = (req, res, next) => {
    console.log("i am in profile middleware");
    next();
}