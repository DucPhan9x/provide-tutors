import { Router } from "express";
import { feebackController } from "../controllers";
import { authMiddleware } from "../middlewares";
const { jwtMidleware } = authMiddleware;
const { postFeedback } = feebackController;

export const feedbackRouter = Router();

feedbackRouter.route("/v1/api/feedback").get(jwtMidleware, postFeedback);
