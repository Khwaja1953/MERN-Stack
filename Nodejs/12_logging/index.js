const express = require('express')
const morgan = require('morgan');
const logger = require('./logger')


const app = express()
// app.use(morgan("combined"))
// app.use(morgan('tiny'))
app.use(morgan('dev'))
app.use(morgan(`tiny`,{
    stream: {
        write: (message)=>{
            logger.info(message.trim())
        }
    }
}))
logger.info("hello world")

app.get('/',(req, res) => {

   
  res.send('Hello World')
})
app.get('/profile/:username',(req,res)=>{
    const {username} = req.params
    logger.info(username)
    res.send("<h1>welcome to profile</h1>")
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})