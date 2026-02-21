const cluster = require("cluster");
const os = require('os');
const totalCPUs = os.cpus().length;
console.log(totalCPUs);
const express = require('express');
const axios = require('axios');
if (cluster.isPrimary){
    for (let i = 0; i < totalCPUs; i++){
        cluster.fork()     
    } 
}
else{
const app = express();

app.get('/axios',async (req, res)=>{
    let data = await axios.get('http://localhost:3000/data');
    return res.send(`<h1>data has been fetched from port 3000 ${data.data.message} and your process is handleded by ${process.pid}</h1>`)
})

app.get('/',(req, res)=>{
    return res.send(`<h1>Hello from server your process id is ${process.pid}</h1>`)
});

app.listen(5000,()=>{console.log("server running on port 5000")})
}