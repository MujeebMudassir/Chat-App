import  express  from "express";
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv"
import connectmongodb from "./db/db.js";

dotenv.config()

const app=express()

const Port =process.env.Port

app.use(express.json())

app.use("/api/auth",authRoutes)

app.listen(Port,()=>{
    connectmongodb()
    console.log("server is listening to port number",Port)
})