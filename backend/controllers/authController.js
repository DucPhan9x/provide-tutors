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
                fullName: student.fullName,
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
                fullName: tutor.fullName,
            };
        }
        const token = tokenEncode(data);

        res.status(200).json({
            status: 200,
            user: {
                userName: data.userName,
                role: data.role,
                id: data.id,
                fullname: data.fullName,
                token,
            },
        });
    } catch (error) {
        next(error);
    }
};

const register = async (req, res, next) => {
    const {
        userName,
        password,
        role,
        email,
        fullName,
        gender,
        phone,
        birthday,
        address,
    } = req.body;
    try {
        const hash = await bcypt.hash(password, 12);
        if (role == 0) {
            await Student.create({
                email,
                userName,
                fullName,
                gender,
                phone,
                birthday,
                address,
                password: hash,
            });
        }
        if (role == 1) {
            await Tutor.create({
                email,
                userName,
                fullName,
                gender,
                phone,
                birthday,
                address,
                password: hash,
            });
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
        console.log(email);
        const [student, tutor] = await Promise.all([
            Student.findOne({ email }),
            Tutor.findOne({ email }),
        ]);
        console.log(student, tutor);
        if (!student && !tutor) {
            throw new HttpError("Email does not match any account", 401);
        }
        let userId;
        if (student) {
            userId = student._id;
        }
        if (tutor) {
            userId = tutor._id;
        }
        const code = generate();
        const enCode = await bcypt.hash(code, 12);
        const codeReset = await CodeReset.findOne({ email });
        if (codeReset) {
            await CodeReset.findOneAndUpdate({ email }, { enCode, time: new Date() });
        } else {
            await CodeReset.create({ email, enCode, userId });
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
    let { email, code, password } = req.body;
    if (!email || !code || !password) {
        throw new HttpError("data password incorrect");
    }
    password = password.trim();
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

const changeNewPassword = async (req, res, next) => {
    const { id, role } = req.user;
    let { password, newPassword } = req.body;
    if (!password || !newPassword) {
        throw new HttpError("old password or password is empty");
    }
    password = password.trim();
    newPassword = newPassword.trim();
    try {
        if (!password || !newPassword) {
            throw new HttpError("password or new password is empty", 401);
        }
        if (!passRegex.test(newPassword)) {
            throw new HttpError(
                "The password cannot contain spaces, and the minimum length is 6 up to 24",
                400
            );
        }
        let user;
        if (role === 0) {
            user = await Student.findById({ _id: id }, { password: 1 });
            const match = await bcypt.compare(password, user.password);
            if (!match) {
                throw new HttpError("old password incorrect");
            }
            const hash = await bcypt.hash(newPassword, 12);
            await Student.findByIdAndUpdate({ _id: id }, { password: hash });
        }
        if (role === 1) {
            user = await Tutor.findById({ _id: id }, { password: 1 });
            const match = await bcypt.compare(password, user.password);
            if (!match) {
                throw new HttpError("old password incorrect", 400);
            }
            const hash = await bcypt.hash(newPassword, 12);
            await Tutor.findByIdAndUpdate({ _id: id }, { password: hash });
        }
        res.status(200).json({
            status: 200,
            msg: "Password has upadated",
        });
    } catch (error) {
        next(error);
    }
};

export const authController = {
    login,
    register,
    forgotPassword,
    confirmCode,
    changePassword,
    changeNewPassword,
};
