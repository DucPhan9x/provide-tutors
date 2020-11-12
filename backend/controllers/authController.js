import bcypt from "bcryptjs";

import { envVariables } from "../configs";

import { Tutor, Student } from "../models";

import { HttpError } from "../constants";
import { tokenEncode, verifyToken } from "../helpers";

const login = async(req, res, next) => {
    const { userName, password } = req.body;
    try {
        const [student, tutor] = await Promise.all([
            Student.findOne({ userName }),
            Tutor.findOne({ userName })
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
                role: student.role
            }
        }
        if (tutor) {
            const match = await bcypt.compare(password, tutor.password);
            if (!match) {
                throw new HttpError("Incorrect password", 401);
            }
            data = {
                userName: tutor.userName,
                id: tutor._id,
                role: tutor.role
            }
        }
        const token = tokenEncode(data);

        res.status(200).json({
            status: 200,
            user: {
                userName: data.userName,
                role: data.role,
                id: data.id,
                token
            }
        });
    } catch (error) {
        next(error);
    }

}

const register = async(req, res, next) => {
    const {
        userName,
        password,
        role,
        email
    } = req.body;
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
                userName
            }
        });
    } catch (error) {
        next(error);
    }
}

export const authController = {
    login,
    register,
}