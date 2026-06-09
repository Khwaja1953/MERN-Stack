const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect("mongodb://localhost:27017/user-registration")
.then(()=>{console.log("mongodb connected successfully")})
.catch(err=>{console.error(err)});
}

module.exports = connectDB;