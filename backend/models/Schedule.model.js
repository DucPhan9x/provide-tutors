import { Schema, model } from "mongoose";

const scheduleSchema = new Schema({
    tutorId: {
        type: Schema.Types.ObjectId,
        ref: "tutor",
    },
    tutorName: {
        type: String,
    },
    subject: {
        type: String,
    },
    grade: {
        type: Number,
    },
    time: [{ type: String }],
    price: {
        type: Number,
    },
    status: {
        type: Number,
        default: 0, // 0 : chua duyet,  1 :tutor duyet,
    },
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: "student",
        },
    ],
    time_created: {
        type: Date,
        default: new Date(),
    },
    image: {
        type: String,
    },
});

export const Schedule = model("schedule", scheduleSchema);
