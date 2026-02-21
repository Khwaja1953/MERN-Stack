const { error } = require('console');
const express = require('express');
const fs = require('fs');
const path = require('path');
const  {Server} = require("socket.io");
const http = require('http');

const app = express();
const server = http.createServer(app);

const io = new Server(server);
app.use(express.static(path.resolve("./public")))

io.on('connection', (socket) => {
  console.log('a user connected',socket.id);
  socket.on("message",(message)=>{
    console.log("message from user",message);
    io.emit("response",message);
  })
});



app.get('/',(req, res)=>{
    return res.sendFile('/public/index.html')
})




app.get('/video', (req, res) => {
    const videoPath = path.join(__dirname, 'test.mp4');
    const videoSize = fs.statSync(videoPath).size;

    const range = req.headers.range;

    if (!range) {
        return res.status(400).send("Requires Range header");
    }

    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;

    res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    });

    const stream = fs.createReadStream(videoPath, { start, end });

    stream.pipe(res);
});
app.get('/home',(req,res)=>{
    fs.readFile('test.mp4',(error, data)=>{
        res.end(data)
    })
})

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
