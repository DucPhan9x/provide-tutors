import { Schema, model } from "mongoose";

const scheduleSchema = new Schema({

    tutorId: {
        type: Schema.Types.ObjectId,
        ref: "tutor"
    },
    fullName: {
        type: String
    },
    subject: {
        type: String
    },
    grade: {
        type: Number
    },
    time: [{ type: String }],
    fee: {
        type: Number
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: "customer"
    }],
    time_created: {
        type: Date,
        default: new Date()
    }
});

export const Schedule = model("schedule", scheduleSchema);