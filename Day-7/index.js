import express from "express";


const app=express()
const student=[
    {id:1,name:"virat",email:"virat@123"},
    {id:2,name:"rohit",email:"rohit@123"},
    {id:3,name:"abd",email:"abd@123"}
]

app.get("/",((req,res)=>{
    return res.send("working Day-7")
}))


app.delete("/delete-user/:id",((req,res)=>{
    // return res.send("delete user")

    try{
        const userId=parseInt(req.params.id)

        if(!userId) return res.status(404).json({success:false, message:"userId is required"})

        const user=student.findIndex((user)=>user.id === userId)

        if(user === -1) return res.status(404).json({success:false, message:"user not fountd"})
        // const updeteduserId=
        student.splice(user,1)

        return res.status(200).json({success:true , message:"delete Successfully", updeteduserId:student})
    }catch(error){
        return res.status(500).json({success:false, error:error})
    }
}))

app.listen(8000,(()=>{
    console.log("port running on 8000");
}))