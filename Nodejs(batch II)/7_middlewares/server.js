const express = require("express");
const check = require('./middleware/check');
const app = express();

// app.use(check)
app.use(express.json());
app.use(express.urlencoded())

app.get("/",(req,res)=>{

    return res.send("welcome")
})
app.post("/",(req,res)=>{
    console.log(req.body.name);
    return res.send("thank you")
})
app.get("/user",check,(req,res)=>{
    console.log(req.body.address)
    return res.send("welcome user")
})

app.listen(3000,()=>{console.log("running")})