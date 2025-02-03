import { hash } from "argon2"
import User from "./user.model.js"

export const getUserById = async (req, res) => {
    try {
        const { uid } = req.params
        const user = await User.findById(uid)

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User does not exist.",
                error: err.message
            })
        }

        return res.status(200).json({
            success: true,
            user
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error obtaining user.",
            error: err.message
        })
    }
}

export const getUsers = async (req, res) => {
    try {
        const { limits = 3, from = 0 } = req.query
        const query = {status: true}

        const [ total, users ] = await Promise.all([
            User.countDocuments(query),
            User.find(query)
                .skip(Number(from))
                .limit(Number(limits))
        ])

        return res.status(200).json({
            succes: true,
            total,
            users
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error listing user.",
            error: err.message
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { uid } = req.params

        const user = await User.findByIdAndUpdate(uid, {status: false}, {new: true})

        return res.status(200).json({
            success: true,
            message: "User removed."
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error listing user.",
            error: err.message
        })
    }
}

export const updatePassword = async (req, res) => {
    try {
        const { uid } = req.params
        const { newPassword } = req.body

        const 

        const encryptedPassword = await hash(newPassword)

        await User.findByIdAndUpdate(uid, {password: encryptedPassword})

        return res.status(200).json({
            success: true,
            message: "Password updated."
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error updating password.",
            error: err.message
        })
    }
}