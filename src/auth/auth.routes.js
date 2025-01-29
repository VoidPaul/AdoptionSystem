import { Router } from "express";
import { register } from "./auth.controller.js";
import { registerValidator } from "../middlewares/check-validator.js";
import { uploadProfilePicture } from "../middlewares/multer-upload.js";

const router = Router()

router.post(
    "/register",
    uploadProfilePicture.single("profilePicture"), 
    registerValidator, 
    register
)

export default router