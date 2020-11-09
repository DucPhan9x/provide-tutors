import mongoose from "mongoose";

export const dbConnection = (uri) => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.once("open", () => { console.log("Connected to database"); })
}