const express = require('express');
const cluster = require('cluster');
const os = require('os');
const totalCPUs = os.availableParallelism();

if(cluster.isPrimary){
    for (let i = 0 ; i < totalCPUs; i++){
        cluster.fork();
    }    
}
else{
    const app = express();
    app.get("/",(req, res)=>{
        return res.send(`Hello from express ${process.pid}`);
    });

    app.listen(3000,()=>{console.log("app is running on port 3000")})
}