import userSchema from "../model/userSchema.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register=async(req,res)=>{
    try {
        // return res.send("register page")
        // const {name,email,password,confirmPassword}=req.body
        const {name,email,password,confirmPassword}=req.body.userData

    if(!name || !email || !password || !confirmPassword){
        return res.status(404).json({success:false, message:"All Feilds are require"})
    }

    const isexistEmail=await userSchema.findOne({email:email})

    if(isexistEmail){
        return res.status(404).json({success:false, message:"Email is exist"})
    }

    if(password !== confirmPassword){
        return res.status(404).json({success:false, message:"Password and comnfimPassword not match"})
    }

    const hashPassword=await bcrypt.hashSync(password,10)
    // console.log(hashPassword,"hashPassword");


    const user=await userSchema({
        name:name,
        email:email,
        password:hashPassword

    })

    await user.save()

     res.status(201).json({success:true, message:"Register successfull"})
    } catch (error) {
        console.log(error,"error");
        return res.status(500).json({success:false,error:error})
    }
    
}


export const login=async(req,res)=>{
    try{
        // const {email ,password}=req.body
        const {email ,password}=req.body.loginData

        if(!email || !password){
            return res.status(404).json({success:false , message:"All filds are require"})
        }
    
        const user=await userSchema.findOne({email:email})
    
        if(!user){
            return res.status(404).json({sucess:false, message:"email not match"})
        }
    
        const userPassword=await bcrypt.compare(password,user.password)
    
        if(!userPassword){
            return res.status(404).json({success:false, message:"password is not match"})
        }
    
        const token= jwt.sign({id:user._id},process.env.SECRET_KEY, {expiresIn:"12000"})
        console.log(token,"token");

        res.cookie("token",token)

        res.status(201).json({success:true, message:"login successsful", userData:user})
    
    }catch(error){
        res.status(500).json({success:false , error:error})
    }
}


export const validUser=async(req,res)=>{
    try{
        const token=req.cookies.token
        console.log(token , "token");
        if(!token){
            return res.status(404).json({success:false, message:"Token not found"})
        }
        const decodedData=await jwt.verify(token, process.env.SECRET_KEY)
        console.log(decodedData,"decodedData");
       
        if(!decodedData.id){
            return res.status(404).json({success:false, message:"Token is expire"})
        }

        const currenTime = Math.floor(Date.now() / 1000); // Get current time in seconds
    if (decodedData.exp < currenTime) {
      return res.json({
        success: false,
        message: "Token is expired",
        expired: true,
      });
    }

    console.log(currenTime);

        const user=await userSchema.findById(decodedData.id)
        console.log(user,"user");
        if(!user){
            return res.status(404).json({success:false,message:"token not valid"})
        }
        res.status(200).json({success:true, user:user})

    }catch(error){
        return res.status(500).json({success:false , error:error})
    }
}

// export const validUser = async (req, res) => {
//     try {
//         const token = req.cookies.token;
//         console.log(token, "token");
//         if (!token) {
//             return res.status(404).json({ success: false, message: "Token not found" });
//         }

//         const decodedData = await jwt.verify(token, process.env.SECRET_KEY);
//         console.log(decodedData, "decodedData");

//         if (!decodedData.id) {
//             return res.status(404).json({ success: false, message: "Token is invalid" });
//         }

//         // Get current time in seconds
//         const currentTime = Math.floor(Date.now() / 1000);

//         if (decodedData.exp < currentTime) {
//             return res.json({
//                 success: false,
//                 message: "Token is expired",
//                 expired: true,
//             });
//         }

//         const user = await userSchema.findById(decodedData.id);
//         console.log(user, "user");
//         if (!user) {
//             return res.status(404).json({ success: false, message: "User not found" });
//         }

//         res.status(200).json({ success: true, user: user });
//     } catch (error) {
//         return res.status(500).json({ success: false, error: error.message });
//     }
// }
