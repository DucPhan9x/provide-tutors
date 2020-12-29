import { HttpError } from "../constants";
import { Tutor, Student, Schedule, Review } from "../models";

// bo
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

const listSchedule = async (req, res, next) => {
    try {
        const schedules = await Schedule.find({}, { __v: 0, students: 0 });
        res.status(200).json({
            status: 200,
            schedules,
        });
    } catch (error) {
        next(error);
    }
};
// search schedule by grade, subjject

const search = async (req, res, next) => {
    let { grade, subject } = req.query;
    let schedules;
    try {
        if (grade && subject) {
            if (!isNaN(grade)) {
                grade = parseInt(grade);
            }
            schedules = await Schedule.find(
                { $and: [{ grade }, { subject }] },
                { __v: 0, students: 0 }
            );
        } else if (grade && subject == "") {
            if (!isNaN(grade)) {
                grade = parseInt(grade);
            }
            schedules = await Schedule.find({ grade }, { __v: 0, students: 0 });
        } else if (grade == "" && subject) {
            schedules = await Schedule.find({ subject }, { __v: 0, students: 0 });
        } else if (grade == "" && subject == "") {
            schedules = await Schedule.find({}, { __v: 0, students: 0 });
        }
        res.status(200).json({
            status: 200,
            schedules,
        });
    } catch (error) {
        next(error);
    }
};

const getReviews = async (req, res, next) => {
    try {
        const { tutorId } = req.params;
        const reviews = await Review.find({ tutorId });
        res.status(200).json({
            status: 200,
            reviews,
        });
    } catch (error) {
        next(error);
    }
};

export const scheduleController = {
    listTutorAndSchedule,
    listSchedule,
    search,
    getReviews,
};
