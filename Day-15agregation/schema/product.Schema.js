import mongoose, { Schema } from "mongoose";

const productSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    }
})

export default mongoose.model("product",productSchema)