const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io")

const app = express();
const server = http.createServer(app)

const io = new Server(server);

app.use(express.static("./uploads"))

app.get("/", (req, res) => {
    return res.sendFile(path.resolve("public/index.html"))
});

io.on("connection", (socket) => {
    console.log("user has  been connect with us with user id ", socket.id);
    socket.on("message", (data) => {
        console.log(` user ${socket.id} has send a message: ${data}`);
        socket.broadcast.emit("response",data);
    })
})


server.listen(8000, () => {
    console.log(`server is running on port 8000`)
})