import { Router } from "express";
import { scheduleController } from "../controllers";
const { listTutorAndSchedule, listSchedule } = scheduleController;

export const scheduleRouter = Router();

scheduleRouter.route("/v1/api/list-tutors").get(listTutorAndSchedule);

scheduleRouter.route("/v1/api/list-schedule").get(listSchedule);
