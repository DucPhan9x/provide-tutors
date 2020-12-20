import { Student, Tutor } from "../models";

import { varConst, HttpError } from "../constants";
import { verifyToken } from "../helpers";
import { envVariables } from "../configs";
const { passRegex, emailRegexp, userNameRegex, phoneRegex } = varConst;

const loginMiddleware = async (req, res, next) => {
    const { userName, password } = req.body;
    try {
        if (!userNameRegex.test(userName)) {
            throw new HttpError("Username is not in the correct format", 400);
        }
        if (!passRegex.test(password)) {
            throw new HttpError(
                "The password cannot contain spaces, and the minimum length is 6 up to 24",
                400
            );
        }
        next();
    } catch (error) {
        next(error);
    }
};

const registerMiddleware = async (req, res, next) => {
    try {
        const {
            userName,
            password,
            role,
            email,
            phone,
            male,
            fullName,
            birthday,
            address,
        } = req.body;
        if (!male) {
            throw new HttpError("Male is empty", 400);
        }
        if (!fullName) {
            throw new HttpError("fullname is empty", 400);
        }
        if (!phone || !phoneRegex.test(phone)) {
            throw new HttpError("Phone is not in the correct format", 400);
        }
        if (!birthday) {
            throw new HttpError("Birthday is empty", 400);
        }
        if (!address) {
            throw new HttpError("Address is empty", 400);
        }
        if (!userNameRegex.test(userName)) {
            throw new HttpError("Username is not in the correct format", 400);
        }
        if (!emailRegexp.test(email)) {
            throw new HttpError("Email invalidate", 400);
        }
        if (!password || !passRegex.test(password)) {
            throw new HttpError(
                "The password cannot contain spaces, and the minimum length is 6 up to 24",
                400
            );
        }
        if (role != 0 && role != 1) {
            throw new HttpError("role can only be 0 or 1", 400);
        }
        const [usernameS, usernameT, emailS, emailT] = await Promise.all([
            Student.findOne({ userName }, { userName: 1 }),
            Tutor.findOne({ userName }, { userName: 1 }),
            Student.findOne({ email }, { email: 1 }),
            Tutor.findOne({ email }, { email: 1 }),
        ]);
        if (usernameS || usernameT) {
            throw new HttpError("Username available", 400);
        }
        if (emailS || emailT) {
            throw new HttpError("The email has been used by another account", 400);
        }
        next();
    } catch (error) {
        next(error);
    }
};

const jwtMidleware = async (req, res, next) => {
    try {
        const token = req.header("token");
        if (!token || token == "null" || token == "" || token == null || token == undefined) {
            throw new HttpError("No token, authorization denied", 401);
        }
        try {
            const decodedToken = verifyToken(token);
            req.user = decodedToken;
            next();
        } catch (e) {
            throw new HttpError("Token is invalid", 400);
        }
    } catch (error) {
        next(error);
    }
};

const jwtAdminMiddleware = async (req, res, next) => {
    try {
        const token = req.header("token");
        if (!token || token == "null" || token == "" || token == null || token == undefined) {
            throw new HttpError("No token, authorization denied", 401);
        }
        try {
            const decodedToken = verifyToken(token);
            if (decodedToken.role != "admin") {
                throw new HttpError("Deny access", 403);
            }
            req.user = decodedToken;

            next();
        } catch (e) {
            throw new HttpError("Token is invalid", 400);
        }
    } catch (error) {
        next(error);
    }
};

export const authMiddleware = {
    registerMiddleware,
    loginMiddleware,
    jwtMidleware,
    jwtAdminMiddleware,
};
