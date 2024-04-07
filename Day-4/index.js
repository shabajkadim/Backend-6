import express from 'express'

const app=express()

app.get('/',((req,res)=>{
    return res.send("home page")
}))

app.get('/register',((req,res)=>{
    return res.send("Register page")
}))

app.get('/product',((req,res)=>{
    return res.send("product page")
}))

app.get('/login' ,((req,res)=>{
    return res.send("login page")
}))

app.listen(5000,(()=>{
    console.log("port running on 5000");
}))