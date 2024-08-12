import express from "express";
import productSchema from "./schema/product.Schema.js";
import mongoose from "mongoose";
import  dotenv  from "dotenv";

const app=express()
app.use(express.json())
dotenv.config()

app.get('/home',((req,res)=>{
    res.send("home page...")
    console.log("home page");
}))

app.post('/add-product',async(req,res)=>{
    try{
        const {name,category,price,quantity}=req.body

        if(!name || !category || !price , !quantity){
            return res.status(401).json({success:false, message:"all fields required"})
        }

        const newProduct=new productSchema({
            name:name,
            category:category,
            price:price,
            quantity:quantity 
        })
        await newProduct.save()

        return res.status(201).json({success:true, message:"product added successfully"})
    }catch(error){
        return res.status(500).json({error})
    }
})

app.get('/get-product',async(req,res)=>{
    try{
        const agregation=[
            {
                $match:{category:"electronics",price:{$gt:1000} }
            },
            
        ];
        
        const filterProduct=await productSchema.aggregate(agregation)
        console.log(filterProduct);
        res.status(201).json({filterProduct})
    }catch(error){
        return res.status(500).json({error})
    }
})

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Database connected");
})

app.listen(5000,(()=>{
    console.log("port runing 5000");
}))