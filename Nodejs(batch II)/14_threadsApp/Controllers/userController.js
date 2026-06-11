import User from "../Models/User.js";
import {createHmac, randomBytes} from"node:crypto"
import {createToken} from "../Utils/token.js"

export const handleUserRegister = async (_,args)=>{
    const {name,email,password} = args;
    const existingUser = await User.findOne({email});

    if (existingUser){
        throw new Error("email already exists");
    }

    const salt = randomBytes(10).toString("hex");
    const hashedPassword = createHmac("sha256",salt).update(password).digest("hex");
    const user = await User.create({
        email,
        password:hashedPassword,
        name,
        salt
    });
    if (!user){
        throw new Error("something went wrong please try again later")
    }
    return true;
}

export const handleUserLogin = async (_,args)=>{
    const {email, password} = args;
    const user = await User.findOne({email});
    if (!user){
        throw new Error("email not found");
    }

    if (user.password != createHmac("sha256",user.salt).update(password).digest("hex")){
        throw new Error("Invalid Password");
    }
    const token = createToken(user);

    return token;

}



export const handleGetUser = async (_,args,context)=>{

    if (!context.user){
        throw new Error("please login first");
    }
    const user = await User.findOne({email: context.user.email});

    if (!user){
        throw new Error("user not found...")
    }
    return user
}
