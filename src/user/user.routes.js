import { Router } from "express";
import { getUserByIdValidator, deleteUserByIdValidator, updatePasswordValidator } from "../middlewares/check-validator.js";
import { getUserById, getUsers, deleteUser, updatePassword } from "./user.controller.js";

const router = Router()

router.get("/findUser/:uid", getUserByIdValidator, getUserById)

router.get("/", getUsers)

router.delete("/deleteuser/:uid", deleteUserByIdValidator, deleteUser)

router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword)

export default router