const express = require('express');
const app = express();
const PORT = 3000;
const productRoute = require('./Routes/productRoute');
const userRoute = require('./Routes/userRouter')

app.use(express.json());
app.use("/product",productRoute);
app.use('/user',userRoute);

app.get('/',(req,res)=>{
    const {name,address} = req.query;
    console.log(name,address)
return res.send("<h1>welcome to our webiste</h1>")
});

app.post("/",(req,res)=>{
    const {name,address} = req.body;
    console.log(name,address)
    return res.send("<h1>thanks for visiting post method</h1>")
});

app.get('/profile',(req,res)=>{
    return res.send("<h1>welcome  to profile section</h1>")
});

app.get('/profile/:name',(req,res)=>{
    // const name = req.params.name;
    const {name} = req.params;
    return res.send(`<h1>welcome ${name} to profile section</h1>`)
})

app.listen(PORT,()=>{
    console.log(`app is running on http://localhost:${PORT}`)
})