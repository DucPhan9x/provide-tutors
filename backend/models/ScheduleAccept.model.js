import { Schema, model } from "mongoose";

const scheduleAcceptSchema = new Schema({
    scheduleId: {
        type: Schema.Types.ObjectId,
        ref: "schedule",
    },
    tutorId: {
        type: Schema.Types.ObjectId,
        ref: "tutor",
    },
    time: [{ type: String }],
});

export const ScheduleAccept = model("scheduleAccept", scheduleAcceptSchema);
