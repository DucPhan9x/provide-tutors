require("dotenv").config();

export const envVariables = {
    port: process.env.PORT || 80,
    // mongoURI: process.env.DB_URI || "mongodb+srv://ttcn13:thuctapcongnhan@cluster0.0orjn.mongodb.net/thuctapcn?retryWrites=true&w=majority",
    mongoURI: process.env.DB_URI || "mongodb://localhost:27017/ttcn",
    jwtSecret: "alkndaksdaskdna!@",
    nodeEnv: process.env.NODE_ENV || "development",
    gmail: process.env.GMAIL || "noreply.strangerfunny@gmail.com",
    pass: process.env.PASS || "kaydateamqQ!@#",
    text: process.env.TEXT || "Code reset password: ",
    subject: process.env.SUBJECT || "[CODE RESET :]",
    cloudName: "tutoring",
    api_key_cloud: "274767948479987",
    api_secret_cloud: '288eL9odJfgTrBDzm-839pqPXSQ'
}