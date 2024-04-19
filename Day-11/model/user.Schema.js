import mongoose, { Schema } from "mongoose";


const userSchema=new Schema({
    name:String,
    email:String,
    password:String,
    age:Number
})

export default mongoose.model("user",userSchema)