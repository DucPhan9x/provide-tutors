import { Schema, model } from "mongoose";


const userSchema = new Schema({

    email: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: Number,
    },
});

export const User = model("user", userSchema);