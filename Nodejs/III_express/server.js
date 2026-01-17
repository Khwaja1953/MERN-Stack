import express from 'express'
 const app = express();
 const PORT = 5000

 app.use(express.json())

 //get requests
 app.get('/',(req, res)=>{
    console.log("user have visited our page");
    res.send("ok")
 })
 app.get('/home',(req, res)=>{
    res.send("welcome to home page...")
 });
 app.get('/profile',(req,res)=>{
    res.send(`hello user how are you`)
 })

 // handling parameter using dynamic routing
 app.get(`/profile/:username`,(req,res)=>{
   const {username} = req.params;
    res.send(`hello ${username} how are you`)
 })
 app.get(`/profile/:username/:id`,(req,res)=>{
   const {username, id} = req.params;
    res.send(`hello ${username} how are you. your id is ${id}`)
 })

//used middleware function
 app.get('/testing',(req,res,next)=>{
   console.log("user has reached here i am sending him to next function")
   next()
 },(req,res)=>{
   console.log("i am next function")
   res.sendStatus(200).json("accepted")
 })

//route channing
app.route('/user')
.get((req,res)=>{res.send("Reading.....")})
.post((req,res)=>{res.send("writing.....")})
.delete((req,res)=>{res.send("deleting.....")})
.put((req,res)=>{res.send("updating......")})

 app.get('/videos',(req,res)=>{
   const {videoName} = req.body;
   console.log("video name is ",videoName)
   //logic to find that video
   res.send(`here is your ${videoName} video enjoy it`)
 })
//post requests

app.post('/',(req,res)=>{
    const data = req.body;
    console.log(data)
    const {name,address} = req.body;
    console.log('data received',name,address)
    res.send("thank you data received successfully")
})


//delete
app.delete('/delete',(req,res)=>{
   const {userName} = req.body;
   res.send(`${userName} has been deleted`)
})

 app.listen(PORT,()=>{console.log(`app is running on http://localhost:${PORT}`)})