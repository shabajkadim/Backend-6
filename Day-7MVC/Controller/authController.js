export const Register=(req,res)=>{
    try{
        const {name,email,password,confirmPassword}=req.body;

        console.log(name,email,password,confirmPassword,"user Data");
        res.status(200).json({success:true,message:"register successfull"})
    }catch(error){
        return res.status(500).json({success:false,error:error})
    }
}