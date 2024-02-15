import express from "express"
import {signup,login,logout} from "../controllers/auth.controller.js"
const Routes=express.Router()

Routes.post("/signup",signup)
Routes.post("/login",login)
Routes.post("/logout",logout)


export default Routes