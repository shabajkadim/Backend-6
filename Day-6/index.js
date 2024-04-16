import express from "express"

const app=express()
app.use(express.json())

const users=[{id:1,name:"virat",email:"virat@123"},
{id:2,name:"rohit",email:"rohit@123"},
{id:3,name:"abd",email:"abd@123"}]

app.get('/',((req,res)=>{
    res.send("welcom...");
}))

app.put('/update-data/:id',((req,res)=>{
    try{
        const {name, email }=req.body
        // res.send("updates data")
        if(!name || !email){
            return res.status(404).json({success:false,massege:"all feilds are required"})
        }

        
    const userId=parseInt(req.params.id)
    if(!userId) return res.status(404).json({ success:false,massege:"userId is required "})
    // console.log(userId);

    const userData=users.find((user)=>user.id == userId)
    if(!userData) return res.status(404).json({success:false,massege:"userData not exist"})
    // console.log(userData);

    userData.email=email
    userData.name=name

    res.status(200).json({success:true , updateduserData:userData})
    }catch(error){
        return res.status(500).json({error})
    }
}))

app.listen(8000,(()=>{
    console.log("port running on 8000");
}))