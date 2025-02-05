import User from "../user/user.model.js"
import { hash, verify } from "argon2"

export const register = async (req, res) => {
    try {
        const data = req.body
        let profilePicture = req.file ? req.file.filename : null

        const encryptedPassword = await hash(data.password)
        data.password = encryptedPassword
        data.profilePicture = profilePicture

        const user = await User.create(data)

        return res.status(201).json({
            message: "User has been registered",
            name: user.name,
            email: user.email
        })
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            message: "User registration failed.",
            error: err.message
        })
    }
}

export const login = async (req, res) => {
    const { email, username, password } = req.body

    try {
        const user = await User.findOne({
            $or: [{email: email}, {username: username}]
        })

        if (!user || !email) {
            return res.status(404).json({
                message: "Invalid credentials.",
                error: "User or E-mail does not exist."
            })
        }

        const validPassword = await verify(user.password, password)

        if (!validPassword) {
            return res.status(400).json({
                message: "Invalid credentials.",
                error: "Incorrect password."
            })
        }

        const token = await generateJWT(user.uid, user.email)

        return res.status(200).json({
            message: "Successful login.",
            userDetails: {
                token: token,
                profilePicture: user.profilePicture
            }
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "User login failed.",
            error: err.message
        })
    }
}