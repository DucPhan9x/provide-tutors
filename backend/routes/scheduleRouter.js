import { Router } from "express";
import { scheduleController } from "../controllers";
const { listTutorAndSchedule } = scheduleController;

export const scheduleRouter = Router();

scheduleRouter.route("/v1/api/list-tutors").get(listTutorAndSchedule);
