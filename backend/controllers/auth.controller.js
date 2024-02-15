import User from "../models/User.model.js"
import bcrypt from "bcryptjs"
export const signup=async (req,resp)=>{
    
    try {
        const {fullName,username,password,confirmPassword,gender}=req.body
        console.log(fullName,username,password,confirmPassword,gender)
        
        if(password !==confirmPassword){
            return resp.send("password doesn't match with confirmPassword")
        }
        const user=await User.findOne({username})
        if(user){
          return  resp.send("User Alreary Exists")
        }

        // hashed password 
        const hashedPassword = await bcrypt.hash(password, 10);

        // profile pic application

		const boyProfilePic = `https://avatar.iran.liara.run/public/boy`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl`;

        const newUser= User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic:gender ==="male"?boyProfilePic:girlProfilePic
        })



        resp.status(201).json(newUser)

        



        
    } catch (error) {
        console.log("Error in SignUp Controller",error)
        
        
    }
}
export const login=(req,resp)=>{
    resp.send("login")
}
export const logout=(req,resp)=>{
    resp.send("logout")
}
