import { Tutor, Schedule } from "../models";
import { HttpError } from "../constants";

const addSchedule = async(req, res, next) => {
    try {
        const { id } = req.user;
        const { grade, subject, time } = req.body;
        if (!time) {
            throw new HttpError("time is empty", 400);
        }
        const tutor = await Tutor.findById({ _id: id })
        const scheduleRegisted = await Schedule.find({ tutorId: id });
        let time_registed = [];
        for (let i = 0; i < scheduleRegisted.length; i++) {
            time_registed = [...time_registed, ...scheduleRegisted[i].time];
        }
        for (let i = 0; i < time.length; i++) {
            if (time_registed.includes(time[i])) {
                throw new HttpError("Duplicate this time", 400);
            }
        }
        let schedule = {
            tutorId: id,
            grade,
            subject,
            time,
            fullName: tutor.fullName
        }
        await Schedule.create(schedule);
        res.status(200).json({
            status: 200,
            msg: "success"
        });
    } catch (error) {
        next(error)
    }
}


const getInfor = async(req, res, next) => {
    const { id } = req.user;
    try {
        const tutor = await Tutor.findById({ _id: id }, { password: 0, __v: 0, review: 0, _id: 0, role: 0 });
        res.status(200).json({
            status: 200,
            tutor
        });
    } catch (error) {
        next(error);
    }
}


const updateInfo = async(req, res, next) => {
    const { id } = req.user;
    try {
        const {
            phone,
            birthday,
            fullName,
            address,
            gender
        } = req.body;

        await Tutor.findOneAndUpdate({ _id: id }, {
            phone,
            fullName,
            address,
            gender,
            birthday
        })
        res.status(200).json({
            status: 200,
            msg: "success"
        });

    } catch (error) {
        next(error);
    }

}

export const tutorController = {
    addSchedule,
    getInfor,
    updateInfo
}