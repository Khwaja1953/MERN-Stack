const {verifyUserToken} = require('../Services/auth')
function checkUser(cookieName){
    return (req, res, next)=>{
        try {
            const authHeader = req.headers?.authorization || "";
            let token = null;
            const parts = authHeader.split(" ");
            if (parts.length === 2 && parts[0] === "Bearer") {
                token = parts[1];
            }
            if (!token && req.cookies && req.cookies.token) {
                token = req.cookies.token;
            }
            if (!token){
                return next();
            }
            const user = verifyUserToken(token);
            req.user = user;
            
        
        } catch (error) {
        }
        return next()
    }

}

module.exports = checkUser
