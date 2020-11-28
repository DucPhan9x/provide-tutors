import { adminController } from "../controllers";
import { Router } from "express";

import { authMiddleware } from "../middlewares";
const { jwtAdminMiddleware } = authMiddleware;

const { register, login, listRequest, adminAccept } = adminController;

export const adminRouter = Router();

adminRouter.route("/v1/api/admin/register").post(register);

adminRouter.route("/v1/api/admin/login").post(login);

adminRouter.route("/v1/api/admin/list-request").get(jwtAdminMiddleware, listRequest);

adminRouter.route("/v1/api/admin/accept/:_id").get(jwtAdminMiddleware, adminAccept);
