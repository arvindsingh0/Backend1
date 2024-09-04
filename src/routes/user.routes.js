import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.midddleware.js";
const router = Router()

//now the user will be directed to the route below
router.route("/register").post(
   // injecting middleware just before the method execution
    upload.fields([
        {
            name: "avatar",
            maxCount:1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
) 

export default router                      