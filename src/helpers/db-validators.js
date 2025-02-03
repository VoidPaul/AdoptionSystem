import User from "../user/user.model.js";

export const existentEmail = async(email = '') => {
    const exists = await User.findOne({email})

    if (exists) {
        throw new Error(`El e-mail ${email} ya está en uso.`)
    }
}

export const existentUser = async(username = '') => {
    const exists = await User.findOne({username})

    if (exists) {
        throw new Error(`El nombre de usuario ${username} ya está en uso.`)
    }
}

export const userExists = async(uid = '') => {
    const exists = await User.findBy({uid})

    if (!exists) {
        throw new Error("El usuario no existe.")
    }
}