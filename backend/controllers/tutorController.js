import { Tutor, Schedule } from "../models";


const addSchedule = async(req, res, next) => {
    const { id } = req.user;
    const tutor = await Tutor.findOne({ _id });
    const
}

export const tutorController = {
    addSchedule
}