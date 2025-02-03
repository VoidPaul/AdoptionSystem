import jwt from "jsonwebtoken"

export const generateJWT = (uid = "", email = "") => {
    const payload = { uid, email }

    jwt.sign(
        payload,
        process.env.SECRET_KEY,
        {
            expiresIn: "1h"
        },
        (err, token) => {
            if (err) {
                reject({
                    success: false,
                    message: err.message
                })
            } else {
                resolve({
                    success: true,
                    token
                })
            }
        }
    )
}