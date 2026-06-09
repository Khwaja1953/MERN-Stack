const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.get("/",(req,res)=>{
    try {

        const logs = path.resolve("./logs");
        if (!fs.existsSync(logs)){
            fs.mkdirSync("logs");
        }

        if (Math.random() > 0.5){
            throw new Error("something went wrong ")
        }
       
        fs.appendFile(path.join(logs,"logs.md"),`users ${req.ip} has visited our website at ${new Date(Date.now()).toLocaleDateString()}\n`,()=>{});
        return res.status(200).send("Thanks for visiting us")
        
    } catch (error) {
        fs.appendFile(path.resolve("./logs/error.md"),error.message,()=>{});
        return res.status(500).send(error)
    }
})

app.listen(3000,()=>{
    console.log("app is running.....")
})