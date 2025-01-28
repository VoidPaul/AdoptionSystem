import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is requried."],
        maxLength: [25, "Name cannot exceed 25 characters."]
    },
    surname: {
        type: String,
        required: [true, "Name is required"],
        macLength: [25, "Name cannot exceed 25 characters."]
    },
    profilePicture: {
        type: String
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

export default mongoose.model("User", UserSchema)