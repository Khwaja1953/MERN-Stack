const express = require("express");
const cluster = require("node:cluster");
const os = require("node:os");


const totalCpus = os.cpus().length;
console.log(totalCpus);

if (cluster.isPrimary){

    for (let i = 0; i<totalCpus;i++){
        cluster.fork();
    }
}
else{
    const app = express();

    app.get("/",(req,res)=>{
        return res.send(`your request was handled by cpu with cpu id ${process.pid}`)
    })

    app.listen(3000,()=>{console.log("running....")})
}

