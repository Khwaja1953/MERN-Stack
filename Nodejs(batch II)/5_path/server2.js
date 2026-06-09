const express = require('express');
const path = require("path");
const fs = require("fs");
const app = express();
const EventEmmiter = require('events');
const myEvent = new EventEmmiter();

app.use(express.json());

myEvent.on("login",(name)=>{
    fs.appendFile("./logs/login.md",`${name} has logged in`,(err)=>{
        if (err){
            console.log(err)
        }
    })
})


if(!fs.existsSync(path.resolve("logs"))){
    console.log("making logs folder")
    fs.mkdir('logs',(err)=>{
        if(err){
            console.log(err)
        }
    })
}

app.get("/",(req,res)=>{
    try {
        fs.appendFile("./logs/log.md",`\nsomeone has visited our website at ${Date.now()} in datetime format ${new Date(Date.now())} only date ${(new Date(Date.now())).toLocaleDateString()}  and only time is ${(new Date(Date.now())).toLocaleTimeString()} both data and time ${(new Date(Date.now())).toLocaleString()}\n`,(err)=>{
            if (err){
                console.log(err);
            }
        });
        if (Math.random() > 0.5){
            throw new Error("number is greate than 0.5 so this is error")
        }
        return res.status(200).send("thanks for visiting our website")
        
    } catch (error) {
        fs.appendFile("./logs/error.md",`error is ${error.message} at ${(new Date(Date.now())).toLocaleString()}\n`,()=>{});
        return res.send(500).send(error.message)
    }
    
});

app.post('/login',(req,res)=>{
    myEvent.emit("login",req.body.name);
    return res.send("welcome user")
})



app.listen(3000,()=>{
    console.log("app is running");
})