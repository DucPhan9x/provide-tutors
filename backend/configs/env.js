require("dotenv").config();

export const envVariables = {
    port: process.env.PORT || 80,
    // mongoURI: process.env.DB_URI || "mongodb+srv://ttcn13:thuctapcongnhan@cluster0.0orjn.mongodb.net/thuctapcn?retryWrites=true&w=majority",
    mongoURI: process.env.DB_URI || "mongodb://localhost:27017/ttcn",
    jwtSecret: "alkndaksdaskdna!@",
    nodeEnv: process.env.NODE_ENV || "development",
}