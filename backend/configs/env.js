require("dotenv").config();

export const envVariables = {
    port: process.env.PORT || 80,
    mongoURI: process.env.DB_URI || "mongodb://localhost:27017/ttcn",
    jwtSecret: "alkndaksdaskdna!@",
    nodeEnv: process.env.NODE_ENV || "development",
}