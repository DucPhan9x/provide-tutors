import { Router } from "express";
import { scheduleController } from "../controllers";
const { listTutorAndSchedule, listSchedule, search, getReviews } = scheduleController;

export const scheduleRouter = Router();

scheduleRouter.route("/v1/api/list-tutors").get(listTutorAndSchedule);

scheduleRouter.route("/v1/api/list-schedule").get(listSchedule);

scheduleRouter.route("/v1/api/list-schedule/search").get(search);

scheduleRouter.route("/v1/api/review/:tutorId").get(getReviews);
