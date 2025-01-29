import { Schema, model } from "mongoose";

const userSchema = Schema({
    name: {
        type: String,
        required: [true, "Name is requried."],
        maxLength: [25, "Name cannot exceed 25 characters."]
    },
    surname: {
        type: String,
        required: [true, "Name is required"],
        maxLength: [25, "Name cannot exceed 25 characters."]
    },
    username: {
        type: String,
        required: [true, "Username required."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password required."],
        minLength: 8
    },
    email: {
        type: String,
        required: [true, "E-mail is required."],
        unique: true
    },
    phone:{
        type: String,
        required: [true, "Phone is required."],
        minLength: 8,
        maxLength: 8
    },
    profilePicture: {
        type: String
    },
    role:{
        type: String,
        required: true,
        enum: ["ADMIN_ROLE", "USER_ROLE"]
    },
    status:{
        type: Boolean,
        default: true
    },
},
{
    versionKey: false,
    timeStamps: true
})

export default model("User", userSchema)