import { Tutor, Schedule, ScheduleRegiste, Student, Contract, ScheduleAccept } from "../models";
import { HttpError } from "../constants";
import { uploadSingle } from "../helpers";

const addSchedule = async (req, res, next) => {
    try {
        const { id } = req.user;
        const { grade, subject, time, price } = req.body;
        if (!time || !grade || !subject || !price) {
            throw new HttpError("data is empty", 400);
        }
        if (typeof price != "number") {
            throw new HttpError("price must be number", 401);
        }
        if (typeof grade != "number") {
            throw new HttpError("grade must be number", 401);
        }
        if (!Array.isArray(time) || time.length == 0) {
            throw new HttpError("time is empty", 400);
        }
        const tutor = await Tutor.findById({ _id: id });
        // lay may cai lich hoc dang dang ky
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
            price,
            tutorName: tutor.fullName,
        };
        await Schedule.create(schedule);
        res.status(200).json({
            status: 200,
            msg: "success",
        });
    } catch (error) {
        next(error);
    }
};

const getInfor = async (req, res, next) => {
    const { id } = req.user;
    try {
        const tutor = await Tutor.findById(
            { _id: id },
            { password: 0, __v: 0, review: 0, _id: 0, role: 0 }
        );
        res.status(200).json({
            status: 200,
            tutor,
        });
    } catch (error) {
        next(error);
    }
};

const uploadImageTutor = async (req, res, next) => {
    try {
        const { id } = req.user;
        if (!req.file) {
            throw new HttpError("No image", 400);
        }
        const image = await uploadSingle(req.file.path);
        console.log("done");
        console.log(image);
        await Tutor.findOneAndUpdate({ _id: id }, { picture: image.url });
        res.status(200).json({
            status: 200,
            msg: "success",
        });
    } catch (error) {
        next(error);
    }
};

const updateInfo = async (req, res, next) => {
    const { id } = req.user;
    try {
        const { phone, birthday, fullName, address, gender } = req.body;
        await Tutor.findOneAndUpdate(
            { _id: id },
            {
                phone,
                fullName,
                address,
                gender,
                birthday,
            }
        );
        res.status(200).json({
            status: 200,
            msg: "success",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const listScheduleRegisted = async (req, res, next) => {
    const tutorId = req.user.id;
    try {
        const listRegiste = await ScheduleRegiste.find({ tutorId }, { __v: 0, tutorName: 0 }).sort({
            _id: -1,
        });
        res.status(200).json({
            status: 200,
            listRegiste,
        });
    } catch (error) {
        next(error);
    }
};

const tutorAccept = async (req, res, next) => {
    const tutorId = req.user.id;
    const scheduleRegistedId = req.params.id;
    try {
        const contracts = await Contract.find({ tutorId });
        const scheduleRegiste = await ScheduleRegiste.findById({ _id: scheduleRegistedId });
        if (!scheduleRegiste) {
            throw new HttpError("schedule does not exist", 400);
        }
        const scheduleAccepts = await ScheduleAccept.find({ tutorId });

        const time = scheduleRegiste.time;
        let timeAccept = [];
        for (let i = 0; i < scheduleAccepts.length; i++) {
            timeAccept = [...timeAccept, ...scheduleAccepts[i].time];
        }
        let timeTeach = [];
        for (let i = 0; i < contracts.length; i++) {
            timeTeach = [...timeTeach, ...contracts[i].time];
        }
        for (let i = 0; i < time.length; i++) {
            if (timeTeach.includes(time[i]) || timeAccept.includes(time[i])) {
                throw new HttpError(
                    "The time has coincided with the teaching schedule or accepted schedule ",
                    400
                );
            }
        }
        await ScheduleAccept.create({
            tutorId,
            scheduleId: scheduleRegiste.scheduleId,
            scheduleRegisterId: scheduleRegistedId,
            studentId: scheduleRegiste.studentId,
            time,
        });
        await ScheduleRegiste.findByIdAndUpdate({ _id: scheduleRegistedId }, { status: 1 });
        res.status(200).json({
            status: 200,
            msg: "success",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const teachSchedule = async (req, res, next) => {
    const { id } = req.user;
    try {
        const teachSchedules = await Contract.find({ tutorId: id }, { __v: 0, time_created: 0 });
        res.status(200).json({
            status: 200,
            teachSchedules,
        });
    } catch (error) {
        next(error);
    }
};

export const tutorController = {
    addSchedule,
    getInfor,
    updateInfo,
    uploadImageTutor,
    listScheduleRegisted,
    tutorAccept,
    teachSchedule,
};
