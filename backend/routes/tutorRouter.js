import { Router } from "express";
import { tutorController } from "../controllers";
const { addSchedule } = tutorController;
import { authMiddleware } from "../middlewares";
const { jwtMidleware } = authMiddleware;
export const tutorRouter = Router();

tutorRouter
    .route("/v1/api/tutor/add-schelule")
    .post(jwtMidleware, addSchedule);