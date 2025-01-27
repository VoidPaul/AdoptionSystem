"use strict"

import mongoose from "mongoose"

export const dbConnect = async () => {
    try {
        mongoose.connection.on("connecting", () => {
            console.log("MongoDB | connecting to MongoDB Service")
        })

        mongoose.connection.on("connected", () => {
            console.log("MongoDB | connected to MongoDB Service")
        })

        mongoose.connection.on("open", () => {
            console.log("MongoDB | connecting to MongoDB Database")
        })

        mongoose.connection.on("reconnected", () => {
            console.log("MongoDB | connected to MongoDB Service")
        })

        mongoose.connection.on("disconnected", () => {
            console.log("MongoDB | disconnected to MongoDB Service")
        })
    } catch (err) {
        console.log(`Database connection failed: ${err}`)
    }
}