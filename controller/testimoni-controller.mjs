import multer from "multer"
import TestimoniModel from "../model/testimoni-model.mjs"
import createErr from "../utils/createError.mjs"

async function getTestimoni(req, res, next) {
    try {
        const Testimoni = await TestimoniModel.find()

        return res
            .json({
                succes: true,
                message: "berhasil mengambil data",
                data: {
                    Testimoni,
                },
            })
            .status(200)
    } catch (err) {
        return next(createErr())
    }
}

async function postTestimoni(req, res, next) {
    try {
        const parseData = JSON.parse(req.body.dataForm)
        const { author, deskripsi, datePost, image, star } = parseData

        const Testimoni = TestimoniModel({
            author,
            deskripsi,
            image,
            datePost,
            star,
        })

        await Testimoni.save()

        return res
            .json({
                succes: true,
                message: "berhasil menyimpan ke database",
            })
            .status(200)
    } catch (err) {
        return next(createErr(400, err.message))
    }
}

async function deleteTestimoni(req, res, next) {
    try {
        const id = req.params.id

        await TestimoniModel.deleteOne({ _id: id })

        return res.json({
            succes: true,
            message: "berhasil menghapus data testimoni",
            data: {
                id,
            },
        })
    } catch (err) {
        return next(createErr(400, err.message))
    }
}

export { postTestimoni, getTestimoni, deleteTestimoni }
