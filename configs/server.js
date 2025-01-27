"use strict"

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

const configs = (app) => {
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
}

export const initServer = () => {
    const app = express()
    try {
        configs(app)
        app.listen(process.env.PORT)
        console.log(`Server running on port: ${process.env.PORT}`)
    } catch (err) {
        console.log(`Server init failed: ${err}`)
    }
}