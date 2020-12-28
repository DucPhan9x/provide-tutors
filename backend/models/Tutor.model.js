import { Schema, model } from "mongoose";

const tutorSchema = new Schema({
    email: {
        type: String,
    },
    userName: {
        type: String,
    },
    password: {
        type: String,
    },
    fullName: {
        type: String,
        default: "",
    },
    birthday: {
        type: String,
        default: "",
    },
    phone: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
    },
    role: {
        type: Number,
        default: 1,
    },
    picture: {
        type: String,
        default: "",
    },
    rating: {
        type: Number,
        default: 0,
    },
});

export const Tutor = model("tutor", tutorSchema);
