import express from 'express'
import AllRoutes from './Routes/index.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


const app=express()
dotenv.config()
app.use(express.json())

app.get('/',((req,res)=>{
    return res.send("working Day-12...")
}))

app.use('/api/v1',AllRoutes)

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Database connect");
})
app.listen(8000,(()=>{
    console.log("port running  8000");
}))