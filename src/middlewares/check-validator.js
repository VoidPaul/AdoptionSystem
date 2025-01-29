import { body } from "express-validator";
import { existentEmail } from "../helpers/db-validators.js";
import { validateFields } from "./validate-fields.js";

export const registerValidator = [
    body("name", "Ingrese un nombre.").not().isEmpty(),
    body("surname", "Ingrese un apellido.").not().isEmpty(),
    body("username", "Ingrese un nombre de usuario").not().isEmpty(),
    body("email", "Ingrese un e-mail.").not().isEmpty(),
    body("email", "Ingrese un e-mail válido.").isEmail(),
    body("email").custom(existentEmail),
    body("password").isStrongPassword({minSymbols: 0}),
    validateFields
]