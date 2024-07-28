import "./model/connect.mjs"

import express from "express"
import cors from "cors"
import createErr from "./utils/createError.mjs"
import TestimoniRouter from "./route/testimoni-route.mjs"

const app = express()
const port = 3000 || process.env.port

app.use(
    cors({
        origin: ["https://dumbways-nine.vercel.app", "http://127.0.0.1:5501"],
    }),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/testimoni", TestimoniRouter)

app.use("/", (req, res, next) => {
    next(createErr())
})

app.use((error, req, res, next) => {
    const status = error.status
    const message = error.message
    const errStack = error.stack
    const succes = false

    return res.status(status).json({
        succes,
        status,
        message,
        errStack,
    })
})

app.listen(port, () => {
    console.log(`your app is running in localhost:${port}`)
})
