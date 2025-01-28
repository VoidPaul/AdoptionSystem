import { check } from "express-validator";
import { existentEmail } from "../helpers/db-validators.js";
import { validateFields } from "./validate-fields.js";

export const registerValidator = [
    check("email").custom(existentEmail),
    validateFields
]