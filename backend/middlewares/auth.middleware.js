import jwt from "jsonwebtoken";
import { User } from "../models";

import { varConst, HttpError } from "../constants";

const {
    passRegex,
    emailRegexp,
    userNameRegex
} = varConst;

const registerMiddleware = async(req, res, next) => {
    const { userName, password, role, email } = req.body;
    try {
        if (!userNameRegex.test(userName)) {
            throw new HttpError("Tên đăng nhập không đúng định dạng", 400);
        }
        if (!emailRegexp.test(email)) {
            throw new HttpError("Email không đúng định dạng", 400);
        }
        if (!passRegex.test(password)) {
            throw new HttpError("Mật khẩu không thể chứa khoảng trắng, và độ dài nhỏ nhất là 6 tối đa 24", 400);
        }
        // const userEmail = await User.
        if (!user) {
            throw new HttpError("Tên đăng nhập hoặc mật khẩu không đúng", 401);
        }

    } catch (error) {
        next();
    }

}

export const authMiddleware = {
    registerMiddleware
}