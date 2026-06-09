const express = require("express");
const connectDB = require("./utils/dbConnection")

const userRoute = require("./Routes/userRoute");
const courseRoute = require('./Routes/courseRoute');

const app = express();
const PORT = 3000;
app.use(express.json());

connectDB()

app.use("/user",userRoute);
app.use("/courses",courseRoute);

app.listen(PORT,()=>{console.log("app is running..")})