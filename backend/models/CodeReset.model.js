import { Schema, model } from "mongoose"

//Creat LinkSchema
const CodeSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    enCode: {
        type: String,
        required: true
    },
    create_at: {
        type: Date,
        default: new Date()
    }
});

export const CodeReset = model("CodeReset", CodeSchema);