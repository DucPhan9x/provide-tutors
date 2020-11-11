import { Schema, model } from "mongoose";


const customerSchema = new Schema({

    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    fullname: {
        type: String
    },
    phone: {
        type: String
    },
    dob: {
        type: Date,
    },
    picture: {
        type: String,
    },
    address: {
        type: String
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    role: {
        type: String,
        default: "customer"
    },
});

export const Customer = model("customer", customerSchema);