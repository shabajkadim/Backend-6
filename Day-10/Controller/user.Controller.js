import userSchema from "../modal/user.Schema.js"

export const Register = async(req,res)=>{
    const {name,email,password,age}=req.body

    if(!name || !email || !password || !age){
        return res.status(404).json({success:false, message:"all Feild are require"})
    }

    const user=new userSchema({
        name:name,
        email:email,
        password:password,
        age:age
    })
    console.log(user,"user");
    await user.save()
    res.status(201).json({success:true,message:"Register Successfull"})
}


export const getUser=async(req,res)=>{
    // res.send("get-user")
    try{
        const users=await userSchema.find({age:{$eq:30}})

        if(users){
        console.log(users);
        res.status(201).json({success:true, message:"user find successful " ,users:users})
        }else{
            return res.status(500).json({ success: false, error });
        }
        
    }catch (error) {
        return res.status(500).json({ success: false, error });
      }
}