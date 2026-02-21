const express = require("express")
const app = express()

// app.use(express.json())

app.get("/",(req,res)=>{
    console.log(req.headers)
    res.setHeader("x-address","handwara")

    return res.status(200).json({"message": "ok"})
})

app.listen(3000,()=>{
    console.log("running")
})