import { check } from "express-validator";
import { existentEmail } from "../helpers/db-validators.js";
import { validateFields } from "./validate-fields.js";

export const registerValidator = [
    check("name", "El nombre es obligatorio.").not().isEmpty(),
    check("email", "Ingrese un e-mail válido.").isEmail(),
    /* check("password").isStrongPassword(), */
    check("email").custom(existentEmail),
    validateFields
]