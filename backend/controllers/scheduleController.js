import { HttpError } from "../constants";
import { Tutor, Student, Schedule } from "../models";

const listTutorAndSchedule = async (req, res, next) => {
    try {
        let tutors = await Tutor.find(
            {},
            { password: 0, review: 0, role: 0, phone: 0, email: 0, username: 0, address: 0 }
        );
        const schedules = await Schedule.find({}, { students: 0, time_created: 0 });
        console.log(tutors, schedules);
        for (let i = 0; i < tutors.length; i++) {
            let listSchedule = [];
            for (let j = 0; j < schedules.length; j++) {
                if (JSON.stringify(tutors[i]._id) == JSON.stringify(schedules[j].tutorId)) {
                    listSchedule.push(schedules[j]);
                }
            }

            let tutor = JSON.parse(JSON.stringify(tutors[i]));
            tutor.schedule = listSchedule;
            tutors[i] = JSON.parse(JSON.stringify(tutor));
        }
        res.status(200).json({
            status: 200,
            tutors,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const scheduleController = {
    listTutorAndSchedule,
};
