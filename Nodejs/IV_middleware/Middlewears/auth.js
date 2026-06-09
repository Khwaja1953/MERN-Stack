const secretKey = "ils";
function checkUser(req,res, next){
let token = secretKey;
const {name, key} = req.body;
if (key == token){
    return next()
}
return res.send("invalid user")
}

export default checkUser