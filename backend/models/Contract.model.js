import { Schema, model } from "mongoose";

const contractSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "student",
    },
    tutorId: {
        type: Schema.Types.ObjectId,
        ref: "tutor",
    },
    tutorName: {
        type: String,
    },
    studentName: {
        type: String,
    },
    subject: {
        type: String,
    },
    address: {
        type: String,
    },
    grade: {
        type: Number,
    },
    time: [
        {
            type: String,
        },
    ],
    price: {
        type: Number,
    },
    status: {
        type: Number,
        default: 1,
    },
    time_created: {
        type: Date,
        default: new Date(),
    },
});

export const Contract = model("contract", contractSchema);
