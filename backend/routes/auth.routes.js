import express from "express"
import {signup,login,logout} from "../controllers/auth.controller.js"
const Routes=express.Router()

Routes.get("/signup",signup)
Routes.get("/login",login)
Routes.get("/logout",logout)


export default Routes