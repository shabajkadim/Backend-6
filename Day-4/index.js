import express from 'express'

const app=express()

app.get('/',((req,res)=>{
    return res.send("home page")
}))

app.get('/register',((req,res)=>{
    return res.send("Register page")
}))

app.get('/login' ,((req,res)=>{
    return res.send("login page")
}))

app.listen(8000,(()=>{
    console.log("port running on 8000");
}))