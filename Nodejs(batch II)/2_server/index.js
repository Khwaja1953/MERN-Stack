//http module
const http = require('http');
const server = http.createServer((req, res)=>{
    console.log("server is running...")
    const method = req.method;
    const url = req.url;
    console.log(url)
    if (url == "/" && method == "GET"){
        res.end("thank you send sending Get request")
    }
    else if (url == "/" && method == "POST"){
        res.end("welcome to post request")
    }
    else if (url == "/profile" && method == "GET"){
        res.end("welcome to profile")
    }
    else{
        res.end("invalid method or url")
    }
});

server.listen(3000,()=>{console.log(`server is running on http://localhost:3000`)});