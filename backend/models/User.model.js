import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    unique:true,
    type: String,
    required: true,
    trim: true,
  },
  password:{
    type:String,
    required:true,
    minlength:6,
    trim: true,
  },

  profilePic:{
    type:String,
    trim: true,
    default:""
  },
  gender:{
    type:String,
    required:true
  }

});


const User =mongoose.model("User", UserSchema)

export default User