import JWT from "jsonwebtoken";

export const createToken = (user)=>{
    return JWT.sign({name: user.name,email: user.email},"ilssrinagar")
}