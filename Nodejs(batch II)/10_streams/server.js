const express = require("express");
const fs = require("fs")
const path = require("path")
const app = express();
const monitor = require("express-status-monitor");
app.use(monitor());

app.get("/", async (req, res) => {
    try {

        const file = path.resolve("file.txt")
        const stream = fs.createReadStream(file, 'utf-8');
        stream.on('data', (chunk) => {
            res.write(chunk);
        });
        stream.on('end', () => {
            res.end();
        });
        stream.on('error', (err) => {
            res.status(500).send('Error reading file');
        })
    } catch (error) {
        console.log(error)
    }
});

app.listen(3000, () => { console.log("running...") })