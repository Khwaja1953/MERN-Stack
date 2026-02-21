const express = require('express')
const ejs = require('ejs')
const multer  = require('multer')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    return res.render('index.ejs')
});

const storage = multer.diskStorage({
    destination: function (req, file ,cb){
        cb(null, './uploads')
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({storage: storage})
app.post('/signup',upload.single('profile'),(req,res)=>{
    console.log(req.file)
  

    return res.status(201).json({message: "thank you images has been uploaded successfully"})
})

app.listen(8000,()=>{console.log("app is running....")})