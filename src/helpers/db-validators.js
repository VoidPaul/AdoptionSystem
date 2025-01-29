import User from "../user/user.model.js";

export const existentEmail = async(email = '') => {
    const exists = await User.findOne({email})

    if (exists) {
        throw new Error(`El e-mail ${email} ya está en uso.`)
    }
}