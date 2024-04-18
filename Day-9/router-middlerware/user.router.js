import { Router } from "express";

const router=Router()

router.get('/register',(req,res)=>{
    res.send("Register page")
})


export default router;