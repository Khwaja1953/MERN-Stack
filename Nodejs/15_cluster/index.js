const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send(`hello from express you process id is ${process.pid}`);
})

app.get('/data',(req, res)=>{
    res.json({message: "hello from port 3000"});
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})