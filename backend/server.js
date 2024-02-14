import  Express  from "express";
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv"
const app=Express()
dotenv.config()
const Port =process.env.Port
app.get("/",(req,res)=>{
    res.send("hello world")
})
 app.use("/api/auth",authRoutes)
app.listen(Port,()=>console.log("server is listening to port number",Port))