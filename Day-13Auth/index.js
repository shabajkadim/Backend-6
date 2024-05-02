import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import AllRoutes from './Routes/index.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

var corsOption={
    origin:"http://localhost:3000",
    credentials :true
}

const app=express()
dotenv.config()
app.use(express.json())
app.use(cors(corsOption))
app.use(cookieParser())

app.get('/',((req,res)=>{
    return res.send("server is running...")
}))


app.use('/api/v1',AllRoutes)

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("database connect");
})

app.listen(8000,(()=>{
    console.log("port running on 8000");
}))
