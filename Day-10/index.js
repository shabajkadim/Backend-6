import express from "express"
import AllRoutes from './Routes/index.js'
import mongoose from "mongoose"
import dotenv from 'dotenv'
const app= express()
app.use(express.json())
dotenv.config()

app.use('/api/v1',AllRoutes)

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Database connected")
})

app.listen(8000,(()=>{
    console.log("port running on 8000")}))