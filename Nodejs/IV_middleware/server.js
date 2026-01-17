import express, { urlencoded } from 'express';
const app = express();
import userRoutes from './Routes/userRoute.js'
import { non_blocking,blocking } from './Middlewears/middleware.js';

//middleware section
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(non_blocking)
app.use('/',userRoutes);


app.listen(3000,()=>{
    console.log("running on port 30000")
})