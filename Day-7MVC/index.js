import express from "express"
import { Register } from "./Controller/authController.js"


const app=express()
app.use(express.json())

app.get('/',((req,res)=>{
    return res.send("working on Day-7 mvc")
}))

app.post('/register',Register)

app.listen(8000,(()=>{
    console.log("port running on 8000");
}))