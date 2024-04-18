import { Router  } from "express";
import { Register, getUser } from "../Controller/user.Controller.js";
 
const router=Router()

router.post('/register',Register)
router.post('/get-users',getUser)

export default router