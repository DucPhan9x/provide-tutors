import { adminController } from "../controllers";
import { Router } from "express";

const { register, login } = adminController;

export const adminRouter = Router();

adminRouter.route("/v1/api/admin/register").post(register);

adminRouter.route("/v1/api/admin/login").post(login);
