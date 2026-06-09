const express = require("express");
const app = express();


app.get('/',(req,res)=>{
    res.end("welcome to our website");
});

app.post("/",(req,res)=>{
    res.end("thanks for post request")
});

app.get("/profile",(req,res)=>{
    res.end("welcome to profile....")
})

app.listen(3000,()=>{console.log("server is running on http://localhost:3000")})
