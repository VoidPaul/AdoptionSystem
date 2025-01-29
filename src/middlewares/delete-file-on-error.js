import { response } from "express"
import fs from "fs/promises"
import { join } from "path"

export const deleteFileOnError = async (req, res, err) => {
    if (req.file && req.filePath) {
        const filePath = join(req.filePath, req.file.filename)
        try {
            await fs.unlink(filePath)
        } catch (unlinkErr) {
            console.log(`Delete error: ${unlinkErr}`)
        }
    }
    if (err.status === 400 || err.errors) {
        return res.status(400).json({
            succes: false,
            errors: err.errors,
        })
    }
    return res.status(500).json({
        success: false,
        message: err.message
    })
}