import User from "./user.model.js"

export const createUser = async(req, res) => {
    const {name, surname, email, phone, role} = req.body
    const newUser = new User({name, surname, email, phone, role})

    await newUser.save()

    res.status(201).json({
        message: "User created succesfully",
        data: newUser
    })
}