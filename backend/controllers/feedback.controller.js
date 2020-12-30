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
        res.status(200).json({
            status: 200,
            msg: "Success",
        });
    } catch (error) {
        next(error);
    }
};

export const feebackController = {
    postFeedback,
};
