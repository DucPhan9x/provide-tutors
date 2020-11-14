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
        type: String,
        default: ""
    },
    birthday: {
        type: Date
    },
    phone: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
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