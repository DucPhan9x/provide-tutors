import { Router } from "express";
import { authController } from "../controllers";
import { authMiddleware } from "../middlewares";

const {
    loginMiddleware,
    registerMiddleware,
} = authMiddleware;

const {
    register,
    login
} = authController;

export const authRouter = Router();

authRouter
    .route("/api/v1/auth/register")
    .post(registerMiddleware, register);

authRouter
    .route("/api/v1/auth/login")
    .post(loginMiddleware, login)