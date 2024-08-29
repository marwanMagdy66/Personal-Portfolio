import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./db/connection.js";
import userRouter from './src/modules/user.router.js';
import infoRouter from './src/modules/info.router.js';

import cors from 'cors';
const app = express(); 
dotenv.config();
app.use(express.json());
await connectDB();
app.use(cors())
app.use('/', express.static('D:/nti course/final project/portfolio/public'));

app.use('/user',userRouter)
app.use('/info',infoRouter)


app.all("*",(req,res)=>{
    res.status(404).send("404 not found");
})


app.use((error,req,res,next)=>{
    const message=error.message;
    const statusCode=error.cause || 500;
    return res.status(statusCode).json({
        success:false,
        message:message,
        stack:error.stack
    })

})






app.listen(process.env.PORT,()=> console.log("app running on port 5000!"));


