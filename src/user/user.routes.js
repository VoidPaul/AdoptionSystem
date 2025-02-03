import { Router } from "express";
import { getUserByIdValidator, deleteUserByIdValidator } from "../middlewares/check-validator.js";
import { getUserById, getUsers, deleteUser } from "./user.controller.js";

const router = Router()

router.get("/findUser/:uid", getUserByIdValidator, getUserById)

router.get("/", getUsers)

router.delete("/deleteuser/:uid", deleteUserByIdValidator, deleteUser)

export default router