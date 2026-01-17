import {createServer} from 'http';
// const http = require("http");

const server = createServer((req, res)=>{
    if (req.method == "GET"){

        res.writeHead(200,{'content-type':'text/plain'});
        res.end("hello user.... how are you welcome to our website thank you for visiting us")
    }
    else if (req.method == "POST"){
        let data = '';
        req.on('data', chunk => {data+=chunk})
        req.on('end',()=>{
            res.writeHead(200,{'content-type':'text/plain'});
            res.end(`Data received successfully....${data}`)
            console.log(data);
        })
    }
    else{
        res.writeHead(404,{'content-type': 'text/plain'});
        res.end("404 Not found")
    }
})

server.listen(5000,()=>{
    console.log("server is listining on port 5000")
})