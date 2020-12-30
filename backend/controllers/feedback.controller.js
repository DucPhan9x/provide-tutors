import { Feedback } from "../models";
import { HttpError } from "../constants";
const postFeedback = async (req, res, next) => {
    const { id, role } = req.user;
    const { content } = req.body;
    try {
        if (!content) {
            throw new HttpError("Content is empty!", 401);
        }
        await Feedback.create({ content, userId: id });
    } catch (error) {
        next(error);
    }
};

export const feebackController = {
    postFeedback,
};
