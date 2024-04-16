import mongoose, { Schema } from "mongoose";


const blogSchema=new Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    }
})

export default mongoose.modal("Blog",blogSchema)