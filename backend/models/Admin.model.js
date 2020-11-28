import { Schema, model } from "mongoose";

const adminSchema = new Schema({
    userName: {
        type: String,
    },
    password: {
        type: String,
    },

    role: {
        type: String,
        default: "admin",
    },
});

export const Admin = model("admin", adminSchema);
