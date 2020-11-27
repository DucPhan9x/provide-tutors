import { HttpError } from "../constants";
import { envVariables } from "../configs";
import bcrypt from "bcryptjs";
import { tokenEncode, verifyToken } from "../helpers";

import { Admin, Schedule, ScheduleRegiste, Tutor, Student } from "../models";
const { key_admin } = envVariables;

const register = async (req, res, next) => {
    const { userName, password, keyAdmin } = req.body;
    if (keyAdmin != key_admin) {
        throw new HttpError("Failed", 401);
    }
    if (!userName || !password) {
        throw new HttpError("userName or password is empty", 401);
    }
    const hash = await bcrypt.hash(password, 12);
    if (!hash) {
        throw new HttpError("hash password failed", 401);
    }
    await Admin.create({ userName, password: hash });
    res.status(200).json({
        status: 200,
        userName,
    });
    try {
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    const { userName, password } = req.body;
    console.log(req.body);
    try {
        if (!userName || !password) {
            throw new HttpError("userName or password is empty", 401);
        }
        const admin = await Admin.findOne({ userName });
        if (!admin) {
            throw new HttpError("userName password incorrect", 400);
        }
        const match = await bcrypt.compare(password, admin.password);
        if (!match) {
            throw new HttpError("userName password incorrect", 400);
        }
        const data = {
            userName,
            role: admin.role,
        };
        const token = tokenEncode(data);
        res.status(200).json({
            status: 200,
            user: {
                userName,
                role: admin.role,
                token,
            },
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};
export const adminController = { register, login };
