import { Router } from "express";
import { authController } from "../controllers";

const {
    register,
    login
} = authController;

export const authRouter = Router();

authRouter
    .route("/auth/register")
    .post(register);

authRouter
    .route("/auth/login")
    .post(login)