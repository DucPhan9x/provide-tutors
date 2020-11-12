import { Schema, model } from "mongoose";


const studentSchema = new Schema({

    email: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    },
    fullName: {
        type: String
    },
    birthday: {
        type: Date
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
    },
    role: {
        type: Number,
        default: 0
    },
    picture: {
        type: String
    }
});

export const Student = model("student", studentSchema);