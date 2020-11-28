import { Router } from "express";
import { tutorController } from "../controllers";

const {
    addSchedule,
    getInfor,
    updateInfo,
    uploadImageTutor,
    listScheduleRegisted,
    tutorAccept,
    teachSchedule,
} = tutorController;

import { upload } from "../helpers";
import { authMiddleware } from "../middlewares";
const { jwtMidleware } = authMiddleware;
export const tutorRouter = Router();

tutorRouter.route("/v1/api/tutor/add-schelule").post(jwtMidleware, addSchedule);

tutorRouter.route("/v1/api/tutor/info").get(jwtMidleware, getInfor);

tutorRouter.route("/v1/api/tutor/update-info").post(jwtMidleware, updateInfo);

tutorRouter
    .route("/v1/api/tutor/upload-image")
    .post(jwtMidleware, upload.single("image"), uploadImageTutor);

tutorRouter.route("/v1/api/tutor/list-schedule-registe").get(jwtMidleware, listScheduleRegisted);

tutorRouter.route("/v1/api/tutor/accept/:id").get(jwtMidleware, tutorAccept);

tutorRouter.route("/v1/api/tutor/teaching-schedule").get(jwtMidleware, teachSchedule);
