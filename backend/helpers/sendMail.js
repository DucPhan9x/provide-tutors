import nodemailer from "nodemailer";
import { envVariables } from "../configs";
const { gmail, pass, text, subject } = envVariables;
const ALPHABET = "0123456789ABCDEFGHIKLMNOPQRSTUVWXYZ";

export const sendEmail = async (email, code) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: gmail,
            pass: pass,
        },
    });
    await transporter.sendMail({
        from: gmail,
        to: email,
        subject: subject,
        text: text + code,
    });
};

export const sendEmailAccept = async (email, data) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: gmail,
            pass: pass,
        },
    });
    await transporter.sendMail({
        from: gmail,
        to: email,
        subject: `[Provider Tutor]`,
        text: `Gia sư bạn tìm đã được chấp nhạn, vào lịch học liên lạc`,
    });
};

export const generate = () => {
    let id = "";
    for (let i = 0; i < 6; i++) {
        id += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return id;
};
