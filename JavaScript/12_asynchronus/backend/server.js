const express = require('express');
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.get('/api',(req,res)=>{
    return res.status(200).json("hello ishfaq hello farhan how are you your request of get is accepted")
})

app.post('/api',(req,res)=>{
    console.log(req.body)
    
    return res.status(200).json("data accepted")
})
app.put('/api',(req,res)=>{
    console.log(req.body);
    return res.status(200).json("data updated")
})

app.delete('/api',(req,res)=>{
    console.log(req.body);
    return res.status(200).json("deleted")
})
app.listen(5000,()=>{
    console.log("listining ")
})