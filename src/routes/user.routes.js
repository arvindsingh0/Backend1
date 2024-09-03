import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router()

//now the user will be directed to the route below
router.route("/register").post(registerUser) 

export default router                      