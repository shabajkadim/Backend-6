import express from "express"
import AllRoutes from './routes/index.js'

const app=express()
app.use(express.json())

app.get('/',((req,res)=>{
    return res.send("working Day-8")
}))

app.use('/api/v1',AllRoutes)

app.listen(8000,(()=>{
    console.log("port running on 8000");
}))