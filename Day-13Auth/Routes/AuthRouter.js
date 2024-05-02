import { Router } from "express";
import {   login, register, validUser } from "../Controller/AuthController.js";



const router=Router()

router.post('/register',register)
router.post('/login',login)          
router.get("/validuser",validUser)



export default router