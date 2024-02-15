import mongoose from "mongoose";

const connectmongodb = async () => {
  try {
    await mongoose.connect(process.env.MongoDb_URI+"ChatApp");
    console.log("connected to database succesfully");
  } catch (error) {
    console.log("Error While connecting to databse", error);
  }
};

export default connectmongodb
