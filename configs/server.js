"use strict"

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import { dbConnection } from './mongo.js'
import userRoutes from "../user/user.routes.js"

const configs = (app) => {
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
}

const routes = (app) => {
    app.use("/adoptionsystem/v1/users", userRoutes)
}

const connectDB = async () => {
    try {
        await dbConnection();
    } catch (err) {
        console.log(`Database connection failed: ${err}`)
    }
}

export const initServer = () => {
    const app = express()
    try {
        configs(app)
        connectDB()
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running on port: ${process.env.PORT}`)
    } catch (err) {
        console.log(`Server init failed: ${err}`)
    }
}