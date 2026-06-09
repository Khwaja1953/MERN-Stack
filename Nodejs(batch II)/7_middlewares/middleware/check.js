const check= (req,res,next)=>{
    console.log("hello world this is middleware");
    if (!(req.headers.name == "saijdeep")){
        return res.send("sorry you dont have access")
    }
    req.body = {address:"saijdeeps addresss is srinagar"}
    return next()

}

module.exports = check