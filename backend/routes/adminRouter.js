import { adminController } from "../controllers";
import { Router } from "express";

import { authMiddleware } from "../middlewares";
const { jwtAdminMiddleware } = authMiddleware;

const {
    register,
    login,
    listRequest,
    adminAccept,
    adminReject,
    listStudent,
    listTutor,
    removeStudent,
    removeTutor,
} = adminController;

export const adminRouter = Router();

adminRouter.route("/v1/api/admin/register").post(register);

adminRouter.route("/v1/api/admin/login").post(login);

adminRouter.route("/v1/api/admin/list-request").get(jwtAdminMiddleware, listRequest);

adminRouter.route("/v1/api/admin/accept/:_id").get(jwtAdminMiddleware, adminAccept);

adminRouter.route("/v1/api/admin/reject/:_id").get(jwtAdminMiddleware, adminReject);

adminRouter.route("/v1/api/admin/list-tutor").get(jwtAdminMiddleware, listTutor);

adminRouter.route("/v1/api/admin/list-tutor/remove/:_id").get(jwtAdminMiddleware, removeTutor);

adminRouter.route("/v1/api/admin/list-student").get(jwtAdminMiddleware, listStudent);

adminRouter.route("/v1/api/admin/list-tutor/remove/:_id").get(jwtAdminMiddleware, removeStudent);
