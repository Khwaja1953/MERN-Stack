const express = require('express');
const path = require('path')
const app = express();
app.use(express.static(path.join(__dirname,'public')))

//middleware for ejs
app.set("view engine",'ejs')
app.get('/',(req,res)=>{
    return res.sendFile('index.html')
});
app.get('/profile',(req,res)=>{
    const name = "musavir"
    return res.render('profile',{name:name,address: null})
})

app.listen(3000,()=>{
    console.log("app is running on http://localhost:3000")
})