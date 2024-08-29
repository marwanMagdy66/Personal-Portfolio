import { Router } from "express";
import * as userController from './user.controller.js';
const router=Router();

router.post('/signUp',userController.signup)
router.post('/login',userController.login)
router.post('/email',userController.sendNewEmail)





export default router;