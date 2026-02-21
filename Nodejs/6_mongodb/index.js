const express = require('express');
const mongoose = require('mongoose');
const {User} = require('./Models/UserModel')
const {router} = require('./Routes/userRoute')
const app = express()
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/batchIII")
.then(()=>{
    console.log("mongodb connected successfully")
})
.catch(error =>{ console.log(error)})

app.use('/api',router)


app.listen(3000,()=>{console.log("app is running on port 3000")})