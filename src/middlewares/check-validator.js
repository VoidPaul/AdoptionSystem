import { body, param } from "express-validator";
import { existentEmail, existentUser, userExists } from "../helpers/db-validators.js";
import { validateFields } from "./validate-fields.js";
import { deleteFileOnError } from "./delete-file-on-error.js";

export const registerValidator = [
    body("name", "Ingrese un nombre.").not().isEmpty(),
    body("surname", "Ingrese un apellido.").not().isEmpty(),
    body("username", "Ingrese un nombre de usuario").not().isEmpty(),
    body("email", "Ingrese un e-mail.").not().isEmpty(),
    body("email", "Ingrese un e-mail válido.").isEmail(),
    body("email").custom(existentEmail),
    body("username").custom(existentUser),
    body("password").isStrongPassword({minSymbols: 0}),
    validateFields,
    deleteFileOnError
]

export const loginValidator = [
    body("email").optional().isEmail().withMessage("Ingrese un e-mail válido."),
    body("username").optional().isString().withMessage("Ingrese un nombre de usuario válido."),
    body("password").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres."),
    validateFields,
    deleteFileOnError
]

export const getUserByIdValidator = [
    param("uid").isMongoId().withMessage("ID no válido."),
    param("uid").custom(userExists),
    validateFields,
    deleteFileOnError
]

export const deleteUserByIdValidator = [
    param("uid").isMongoId().withMessage("ID no válido."),
    param("uid").custom(userExists),
    validateFields,
    deleteFileOnError
]

export const updatePasswordValidator = [
    param("uid").isMongoId().withMessage("ID no válido."),
    param("uid").custom(userExists),
    body("newPassword").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres."),
    validateFields,
    deleteFileOnError
]