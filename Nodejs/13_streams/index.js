const express = require('express')
const fs = require('fs')
const path = require('path');

const app = express()

app.get('/', (req, res) => {
//   fs.readFile("./50mb.txt",(error, data)=>{
//     if(error){
//         return res.end(error)
//     }
//     return res.end(data);
//   })
    const stream = fs.createReadStream('./50mb.txt',{
        encoding: "utf-8",
        highWaterMark: 64 * 1024
    })
    stream.pipe(res);
});

app.get('/video',(req, res)=>{
//     fs.readFile("./test.mp4",(error, data)=>{
//     if(error){
//         return res.end(error)
//     }
//     return res.end(data);
//   })

    const stream = fs.createReadStream('test.mp4')
    stream.pipe(res)
})

app.get('/stream',(req, res)=>{
    const videoPath = path.join(__dirname,'./test.mp4')
    const videoSize = fs.statSync(videoPath).size;
    const chunck = 10**6;
    const range = req.headers.range;
    console.log(range)
    const start = Number(range.replace(/\D/g, ""))
    const end = Math.min(start + chunck, videoSize - 1)
    const contentLength = end - start + 1;
    res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    });

    const stream = fs.createReadStream(videoPath,{start, end})
    stream.pipe(res)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})