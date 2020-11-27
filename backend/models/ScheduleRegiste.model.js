import { Schema, model } from "mongoose";

const scheduleRegisteSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "student",
    },
    scheduleId: {
        type: Schema.Types.ObjectId,
        ref: "schedule",
    },
    time: [{ type: String }],
    status: {
        type: Number,
        default: 0, //  0 chua dc tutor duyet , 1 dang doi admin duyyet, 2 da dc duye  => xoa
    },
});

export const ScheduleRegiste = model("scheduleRegiste", scheduleRegisteSchema);
