import bcypt from "bcryptjs";

import { envVariables } from "../configs";
import { Tutor, Student, CodeReset } from "../models";

import { HttpError, varConst } from "../constants";
const { passRegex } = varConst;
import { tokenEncode, verifyToken, sendEmail, generate } from "../helpers";

const login = async (req, res, next) => {
    const { userName, password } = req.body;
    try {
        const [student, tutor] = await Promise.all([
            Student.findOne({ userName }),
            Tutor.findOne({ userName }),
        ]);
        console.log(student, tutor);
        if (!student && !tutor) {
            throw new HttpError("Username does not exist", 401);
        }
        let data = {};
        if (student) {
            const match = await bcypt.compare(password, student.password);
            if (!match) {
                throw new HttpError("Incorrect password", 401);
            }
            data = {
                userName: student.userName,
                id: student._id,
                role: student.role,
            };
        }
        if (tutor) {
            const match = await bcypt.compare(password, tutor.password);
            if (!match) {
                throw new HttpError("Incorrect password", 401);
            }
            data = {
                userName: tutor.userName,
                id: tutor._id,
                role: tutor.role,
            };
        }
        const token = tokenEncode(data);

        res.status(200).json({
            status: 200,
            user: {
                userName: data.userName,
                role: data.role,
                id: data.id,
                token,
            },
        });
    } catch (error) {
        next(error);
    }
};

const register = async (req, res, next) => {
    const { userName, password, role, email } = req.body;
    console.log(req.body);
    try {
        const hash = await bcypt.hash(password, 12);
        if (role == 0) {
            await Student.create({ email, userName, password: hash });
        }
        if (role == 1) {
            await Tutor.create({ email, userName, password: hash });
        }
        res.status(200).json({
            status: 200,
            user: {
                userName,
            },
        });
    } catch (error) {
        next(error);
    }
};

const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const [student, tutor] = await Promise.all([
            Student.findOne({ email }),
            Tutor.findOne({ email }),
        ]);
        if (!student && !tutor) {
            throw new HttpError("Email does not match any account", 401);
        }
        const code = generate();
        const enCode = await bcypt.hash(code, 12);
        const codeReset = await CodeReset.findOne({ email });
        if (codeReset) {
            await CodeReset.findOneAndUpdate({ email }, { enCode, time: new Date() });
        } else {
            await CodeReset.create({ email, enCode, userId: student._id });
        }
        sendEmail(email, code);
        res.status(200).json({
            status: 200,
            msg: "We sent code to your email",
        });
    } catch (error) {
        next(error);
    }
};
const confirmCode = async (req, res, next) => {
    try {
        const { code, email } = req.body;
        const codeReset = await CodeReset.findOne({ email });
        const match = await bcypt.compare(code, codeReset.enCode);
        if (!match) {
            throw new HttpError("The code is not correct", 401);
        }
        res.status(200).json({
            status: 200,
            msg: "Confirm code",
        });
    } catch (error) {
        next(error);
    }
};
const changePassword = async (req, res, next) => {
    const { email, code, password } = req.body;
    try {
        if (!passRegex.test(password)) {
            throw new HttpError(
                "The password cannot contain spaces, and the minimum length is 6 up to 24",
                400
            );
        }
        const codeReset = await CodeReset.findOne({ email });
        const match = await bcypt.compare(code, codeReset.enCode);
        if (!match) {
            throw new HttpError("Code or email not found", 404);
        }
        const hash = await bcypt.hash(password, 12);
        const [student, tutor] = await Promise.all([
            Student.findOne({ email }),
            Tutor.findOne({ email }),
        ]);
        if (student) {
            await Student.findOneAndUpdate({ email }, { password: hash });
        }
        if (tutor) {
            await Tutor.findOneAndUpdate({ email }, { password: hash });
        }
        await CodeReset.findOneAndRemove({ email });
        res.status(200).json({
            status: 200,
            msg: "Changed password",
        });
    } catch (error) {}
};

export const authController = {
    login,
    register,
    forgotPassword,
    confirmCode,
    changePassword,
};
