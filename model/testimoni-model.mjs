import mongoose, { Types } from "mongoose"

const TestimoniSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    datePost: {
        type: Date,
        required: true,
    },
    star: {
        type: Number,
        required: true,
    },
})

const TestimoniModel = new mongoose.model("testimoni-dumbways", TestimoniSchema)

export default TestimoniModel
