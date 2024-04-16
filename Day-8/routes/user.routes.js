import { Router } from "express";
import { Login, Logout, Register } from "../Controller/user.controller.js";

const router=Router()

router.use('/register',Register)
router.use('/login',Login)
router.use('/logout',Logout)

export default router