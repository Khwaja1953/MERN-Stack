// const path = require('path');
// console.log(__dirname);
// const joinedPath = path.join(__dirname,"./uploads");
// console.log(joinedPath)
// const filePath = path.join(__dirname,"./index.js")
// console.log(path.basename(filePath));
// console.log(path.extname(filePath));
// console.log(path.dirname('./index.js'));
// const testFile = path.join(joinedPath,"test.jsx");
// console.log(testFile);
// console.log(path.dirname(testFile));


// console.log(path.resolve("./uploads"))
// console.log(path.resolve(__dirname, "./index.js" ))

const express = require('express');
const app = express();
const EventEmitter = require("events");
const myEvent = new EventEmitter();

myEvent.on("user",()=>{
    console.log("user has come to our website...")
})
app.get("/",(req, res)=>{
    res.send("<h1>Hello world</h1>")
})
app.get("/user",(req,res)=>{
    myEvent.emit("user");
    res.send("<h1>Hello user</h1>")
})

app.listen(3000,()=>{console.log("running")})