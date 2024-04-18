import express from "express"
import allRoutes from './router-middlerware/index.js'
import morgan from "morgan"
import { isvalidToken } from "./middleware/user.middleware.js"

const app=express()
app.use(express.json())

app.use(morgan("combined")) // morgan return all [console.log] from spacific api 


app.use(isvalidToken)//custom lavel middleware

app.use((req,res,next)=>{
    res.send("hii from middelware")
})

app.use((req,res,next)=>{
    const{completeHomework}=req.body
    if(completeHomework === "true"){
        next()
    }else{
        res.send("complete your homework")
    }
})

app.post("/",((req,res)=>{
    return res.send("working Day 9")
}))


app.get('/hello',((req,res)=>{
    return res.send("helloo")
}))

app.use('/api/v1',allRoutes)

app.listen(8000,(()=>{
    console.log("port running on 8000");
}))