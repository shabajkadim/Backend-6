import userSchema from "../model/user.schema.js"
import bcrypt from 'bcrypt'

export const Register=async(req,res)=>{
    try{
    // return res.send("Register page")
    const{name,email,password,confirmPassword}=req.body

    if(!name || !email || !password || !confirmPassword){
        return res.status(404).json({success:false , messase:"All feild  require"})
    }

    if(password !== confirmPassword){
        return res.status(404).json({success:false , message:"password and confirmPassword not match"})
    }

    const isEmailExist=await userSchema.findOne({email:email})

    if(isEmailExist){
        return res.status(404).json({success:false, message:"email is exist"})
    }

    const hashPassword=await bcrypt.hashSync(password,10)
    // console.log(hashPassword);

    const user=await userSchema({
        name:name,
        email:email,
        password:hashPassword
    })
    await user.save()
    res.status(201).json({success:true, message:"Register successfull"})
    }catch(error){
        console.log(error);
        res.status(500).json({success:false,error:error});
    }
}

export const Login=async(req,res)=>{
    try{
        const{email,password}=req.body

        if(!email || !password){
            res.status(404).json({success:false, message:"All feild are require"})
        }
        const user=await userSchema.findOne({email:email})
        if(!user){
           return res.status(404).json({success:false , message:"email is not exist"})
        }

        const userpassword=await bcrypt.compare(password,user.password)
        if(!userpassword){
            return res.status(404).json({success:false, message:"Password not match"})
        }

        res.status(200).json({success:true,message:"Login successfull"})
    }catch(error){
        console.log(error);
        res.status(500).json({success:false,error:error})
    }
}



// export const Login = async (req, res) => {
//     // return res.send("login page")
//     try {
//         const{email,password}=req.body
//         // console.log(req.body);
       

//         if (!email || !password) {
//             return res.status(404).json({ success: false, message: "Email and password are required" });
//         }
        
//         const user = await userSchema.findOne({ email: email });
//         if (!user) {
//             return res.status(404).json({ success: false, message: "Email does not exist" });
//         }

//         const userpassword=await bcrypt.compare(password,user.password)

//         if(!userpassword){
//             return res.status(404).json({success:false, message:"Password is incorrect"})
            
//         }
         

//          res.status(200).json({ success: true, message: "Login successful", });
       
//     } catch (error) {
//         return res.status(500).json({ success:false, error:error});
//     }

// }
