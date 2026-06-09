const express = require("express");
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());


app.get("/",(req,res)=>{
    console.log("user-agent",req.headers['user-agent'])
    console.log("accept", req.headers['accept'])
    console.log(req.headers)
   

    // res.status(200).end("hello world");
    // res.status(200).send(`hello ${{name: "saijdeep",address: "srinagar"}}`)
    // res.status(200).json({name: "saijdeep",address: "srinagar"})
    // res.status(200).sendFile(__dirname + "/index.html")
   
    return res.send("hello world")
});

app.post("/",(req,res)=>{
    console.log(req.headers)
    console.log(req.body);
    const {name} = req.body;
    res.setHeader("X-name",req.body.name);
    // res.send(`you data is ${req.body}`)
     if (name){
        return res.redirect('/profile')
    }
    return res.send("hello world")
})
app.get("/profile",(req,res)=>{
    res.send(`hello this is profile`)
})


app.listen(PORT,()=>{console.log("app is running on port 3000")})