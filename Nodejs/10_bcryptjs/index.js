const express = require('express');
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    password: {type: String}
});
const User = mongoose.model("user",userSchema);

const app = express()
mongoose.connect('mongodb://localhost:27017/bcrypt')
.then(console.log("mongodb connected"))

app.use(express.json())


app.post('/signup',async (req,res)=>{
    const {email, password} = req.body;
    const salt = bcrypt.genSaltSync(10)
    console.log(salt)
    const hash = bcrypt.hashSync(password,salt)
    

    const user = await User.create({email:email,password:hash})

    if(user){
        res.status(201).json({message:"user created"})
    }
    else{
        res.status(500).json({error: "something went wrong"})
    }


});
app.get('/login',async (req,res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email})
    console.log(password,user.password)

    if( bcrypt.compareSync(password,user.password)){
        res.status(200).json({message:"welcome user"})

    }else{
        res.status(500).json({error: "something went wrong"})
    }
    
    
})

app.listen(8000,()=>{console.log("app is running on port 8000")})

