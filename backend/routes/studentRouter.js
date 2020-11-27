import { Router } from "express";
import { studentController } from "../controllers";

import { authMiddleware } from "../middlewares";
const { jwtMidleware } = authMiddleware;

const { getInfo, updateInfo, chooseSchedule } = studentController;
export const studentRouter = Router();

studentRouter.route("/v1/api/student/info").get(jwtMidleware, getInfo);

studentRouter.route("/v1/api/student/update-info").post(jwtMidleware, updateInfo);

studentRouter.route("/v1/api/student/choose-schedule").post(jwtMidleware, chooseSchedule);
