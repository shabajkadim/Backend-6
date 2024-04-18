import { Router } from "express";
import userRoutes from "./user.router.js";


const router=Router()
router.use((req,res,next)=>{
    console.log("inside router lavel middleware");
    // next()
    res.send("inside router lavel middleware")
})

router.use('/user',userRoutes)

export default router;