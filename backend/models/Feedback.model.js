import { Schema, model } from "mongoose";

const feedbackSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "student",
    },

    content: {
        type: String,
    },
    time: {
        type: Date,
        default: new Date(),
    },
});

export const Feedback = model("feedback", feedbackSchema);
