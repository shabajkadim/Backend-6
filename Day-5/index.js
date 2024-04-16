import express, { json } from "express";

const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("working Day-5")
})

app.post("/register",(req,res)=>{
    // res.send("register page")
    try{
        const{name,email,password,confirmPassword}=req.body
        if(!name || !email || !password || !confirmPassword){
            res.send("All Feilds are required")
        }
        if(password !== confirmPassword){
            res.send("check password nad confirmPassword")
        }

        res.send("Register Sucessfull")
    }catch(error){
        res.send("error")
    }
})

app.listen(8000,(()=>{
    console.log("port running on 8000");
}))