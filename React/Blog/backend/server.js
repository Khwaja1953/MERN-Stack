const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const checkUser = require('./Middleware/protect');
const Blog = require('./Models/Blog');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
app.use(checkUser());
app.use("/uploads",express.static(path.resolve("uploads")));

const userRoute = require('./Routes/userRoute');
const blogRoute = require('./Routes/blogRoute');

app.get('/',async (req, res)=>{
const blogs = await Blog.find({});
    return res.status(200).json({blogs});
    
    // return res.render("home",{user: req.user, blogs: blogs});
})
app.use('/user',userRoute);
app.use('/blog',blogRoute);




mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("mongodb connected successfully")})
app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})
