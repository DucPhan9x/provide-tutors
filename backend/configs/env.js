require("dotenv").config();

export const envVariables = {
    port: process.env.PORT || 5000,
    mongoURI:
        process.env.DB_URI ||
        "mongodb+srv://ttcn13:thuctapcongnhan@cluster0.0orjn.mongodb.net/thuctapcn?retryWrites=true&w=majority",
    // mongoURI: process.env.DB_URI || "mongodb://localhost:27017/ttcn",
    jwtSecret: "alkndaksdaskdna!@",
    nodeEnv: process.env.NODE_ENV || "development",
    gmail: process.env.GMAIL || "trungnam23799@gmail.com",
    pass: process.env.PASS || "namvippro23799",
    text: process.env.TEXT || "Code reset password: ",
    subject: process.env.SUBJECT || "[CODE RESET :]",
    cloudName: "dut-t1-99",
    api_key_cloud: "524472935912584",
    api_secret_cloud: "CD1P6czcQ-wUQdwbYDOXn8BmUjE",
    key_admin: "123qwe!@#",
};
