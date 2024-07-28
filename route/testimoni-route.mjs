import {
    deleteTestimoni,
    getTestimoni,
    postTestimoni,
} from "../controller/testimoni-controller.mjs"
import express from "express"
import multer from "multer"

const upload = multer({ storage: multer.memoryStorage() })

const Router = express.Router()

Router.get("/", upload.none(), getTestimoni)
Router.post("/", upload.single("dataForm"), postTestimoni)
Router.delete("/:id", upload.none(), deleteTestimoni)

export default Router
