import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
},{timestamps:true});

export const User = mongoose.model("User",userSchema); 
