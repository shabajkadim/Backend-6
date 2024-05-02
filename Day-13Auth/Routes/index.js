import { Router } from "express";
import  AuthRoutes from './AuthRouter.js'

const router= Router()

router.use('/auth',AuthRoutes)

export default router