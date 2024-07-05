import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userSchema from './model/user.Schema.js'

const app=express()
dotenv.config()
app.use(express.json())

app.get('/',((req,res)=>{
    return res.send("working Day-11")
}))

app.get('/')

app.get('/get-user',(async(req,res)=>{
    try{
        const {age}=req.body
        // const user=await userSchema.find({})//find all usersData
        // const user =await userSchema.find({name:"virat",email:"virat@123"})
        // const user =await userSchema.find({age:35})
        // const user =await userSchema.find({age:{$eq:25}})
        // const user =await userSchema.find({age:{$lt:25}})
        // const user =await userSchema.find({age:{$lte:25}})
        // const user =await userSchema.find({age:{$ne:25}})
        // const user =await userSchema.find({age:{$gt:25}})
        // const user =await userSchema.find({age:{$gte:25}})
        // const user =await userSchema.find({age:{$in:[25,35]}})
        // const user =await userSchema.find({age:{$nin:[20,35]}})
        // const user =await userSchema.find({cantact:{$exists:true}})
        // const user=await userSchema.find({ $and: [ { age:30 }, { name:"virat" } ] })
        // const user=await userSchema.find({ $or: [ { age:25 }, { age:35},{age:40} ] })
        // const user=await userSchema.find({ $nor: [ { age:30 }, { name:"virat" } ] })
       const user=await userSchema.find({ email: { $type: "string" } })

        res.status(200).json({sucess:true,user:user })

    }catch(error){
        return res.status(500).json({succes:false})
    }
}))

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Database connected")
})

app.listen(8050,(()=>{
    console.log("port running on 8050");
}))