const express = require('express');
const app = express()
const monsooge = require('mongoose');
const nodemailer = require("nodemailer");

monsooge.connect('mongodb://localhost:27017/nodemailer')
.then(()=>{console.log("mongodb connected")})
.catch(()=>{console.log("error")})
const userSchema = new monsooge.Schema({
    email: {type: String},
    password: {type: String},
    isVerified: {type: Boolean, default: false},
    otpValidity: {
        otp: {type: String},   
        validTill:{type: Date, default: Date.now() + 5*60*1000}
    }
});
const User = monsooge.model("User",userSchema);
const transpoter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: "khwajamuzamil1953@gmail.com",
        pass:"ornhbcedvfmliylq"
    }
})
app.use(express.json())
console.log("hello world")
app.get('/',(req,res)=>{
    res.end("hello world")
})
app.post('/', async (req,res)=>{
    const {email, password,} = req.body;
    console.log(email,password)
    const user = await User.findOne({email});
    if (user && user.isVerified){
        return res.status(400).json({message: "acccount already exists"})

    }
    else if (user && !user.isVerified){
        return res.status(400).json({message: "please verify your account"})
    }

    const otp =  Math.floor(Math.random() * 9000 + 1000);
    const info = await transpoter.sendMail({
        from: "khwajamuzamil1953@gmail.com",
        to: email,
        subject: "your otp for signup",
        text: `your otp is ${otp} and is valid for 5 minutes `
    })
    if (info){
        const user = await User.create({email: email,password:password,otpValidity: {otp:otp}})
        if (user){
            return res.status(201).json({message: "please verity you account by otp",email: email})
        }
        return res.status(500).json({error: "something went wrong please try again later"})
    }
    return res.status(500).json({error: "something went wrong please try again later"})


    
});
app.post('/verifyotp',async (req,res)=>{
    const {email, otp} = req.body;
    const user = await User.findOne({email})
    if(user &&!user.isVerified){
        if (otp == user.otpValidity.otp && Date.now() < user.otpValidity.validTill){
            const user = await User.findOneAndUpdate({email},{isVerified: true})
            return res.status(200).json({message: "account verified successfully plase login"})
        }
        return res.status(400).json({error:"either otp is wrong or time expired"})

    }
    return res.status(500).json({error: "something went wrong"})
})

app.listen(8000,()=>{console.log("app is runnig on part 8000")})