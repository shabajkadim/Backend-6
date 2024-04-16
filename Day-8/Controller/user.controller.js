export const Register=(req,res)=>{
    try{
        const {name,email,password,confirmPassword}=req.body;

        console.log(name,email,password,confirmPassword,"user Data");
        res.status(200).json({success:true,message:"register successfull"})
    }catch(error){
        return res.status(500).json({success:false,error:error})
    }
}

export const Login=(req,res)=>{
    try{
        const {name,email,password,confirmPassword}=req.body;

        console.log(name,email,password,confirmPassword,"user Data");
        res.status(200).json({success:true,message:"login successfull"})
    }catch(error){
        return res.status(500).json({success:false,error:error})
    }
}


export const Logout=(req,res)=>{
    try{
        const {name,email,password,confirmPassword}=req.body;

        console.log(name,email,password,confirmPassword,"user Data");
        res.status(200).json({success:true,message:"logout successfull"})
    }catch(error){
        return res.status(500).json({success:false,error:error})
    }
}