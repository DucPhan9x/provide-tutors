import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "student",
    },
    tutorId: {
        type: Schema.Types.ObjectId,
        ref: "tutor",
    },
    fullName: {
        type: String,
    },
    rating: {
        type: Number,
    },

    content: {
        type: String,
    },
    time: {
        type: Date,
        default: new Date(),
    },
});

export const Review = model("review", reviewSchema);
