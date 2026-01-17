const express = require('express');
const mongoose = require('mongoose');
const {User} = require('./Models/UserModel')
const app = express()
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/batchIII")
.then(()=>{
    console.log("mongodb connected successfully")
})
.catch(error =>{ console.log(error)})


app.post('/signup',async (req,res)=>{
    const {name,email,password} = req.body;
    console.log(name,email,password);
    const user = await User.create({name:name,email:email,password:password})

    return res.status(200).send("account created")
})

app.listen(3000,()=>{console.log("app is running on port 3000")})