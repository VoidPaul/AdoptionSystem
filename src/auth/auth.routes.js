import { Router } from "express";
import { register } from "./auth.controller.js";
import { registerValidator } from "../middlewares/check-validator.js";

const router = Router()

router.post("/register", registerValidator, register)

export default router