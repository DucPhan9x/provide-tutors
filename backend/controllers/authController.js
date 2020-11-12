import bcypt from "bcryptjs";

import { envVariables } from "../configs";
const { jwtSecret } = envVariables;

import { User } from "../models";
import { HttpError } from "../constants";
import { tokenEncode, verifyToken } from "../helpers";

const login = async(req, res, next) => {
    const { userName, password } = req.body;
    try {
        const user = await User.findOne({ userName });
        if (!user) {
            throw new HttpError("username is not exist", 404);
        }
        const match = await bcypt.compare(password, user.password);
        if (!match) {
            throw new HttpError("password fail", 401);
        }

        const data = {
            username: user.userName,
            role: user.role
        }

        const token = tokenEncode(data);

        res.status(200).json({
            status: 200,
            user: {
                userName: user.userName,
                id: user._id,
                token
            }
        });
    } catch (error) {
        console.log(error);
        next();
    }



}

const register = async(req, res, next) => {
    const { userName, password, role, email } = req.body;
    try {
        const user = await User.findOne({ userName });
        if (user) {
            throw new HttpError("userName is exist", 201);
        }
        const hash = await bcypt.hash(password, 12);
        await User.create({ userName, password: hash, role })
        res.status(200).json({
            status: 200,
            user: {
                userName
            }
        });
    } catch (error) {
        console.log(error);
        next();
    }


}

export const authController = {
    login,
    register
}