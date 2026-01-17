import express from 'express';
const app = express();

app.use(express.json())
app.get('/',(req, res)=>{
    console.log("hello world");
    res.send("welcome to our website")
});
app.get('/profile',(req,res)=>{
    res.send("Hello user")
})
app.get('/profile/:username',(req,res)=>{
    const {username} = req.params;
    res.send(`hello ${username}`)
})

app.post('/',(req,res)=>{
    const {name, address} = req.body;
    console.log(name,address);
    res.send(`data received successfully thank you  `)
})

app.listen(3000,()=>{
    console.log(`server is running on http://localhost:3000`)
})