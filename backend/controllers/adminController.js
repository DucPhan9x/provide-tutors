import { HttpError } from "../constants";
import { envVariables } from "../configs";
import bcrypt from "bcryptjs";
import { tokenEncode, verifyToken, sendEmailAccept } from "../helpers";
import mongo from "mongoose";

import {
    Admin,
    Schedule,
    ScheduleRegiste,
    Tutor,
    Student,
    ScheduleAccept,
    Contract,
} from "../models";
const { key_admin } = envVariables;

const register = async (req, res, next) => {
    const { userName, password, keyAdmin } = req.body;
    if (keyAdmin != key_admin) {
        throw new HttpError("Failed", 401);
    }
    if (!userName || !password) {
        throw new HttpError("userName or password is empty", 401);
    }
    const hash = await bcrypt.hash(password, 12);
    if (!hash) {
        throw new HttpError("hash password failed", 401);
    }
    await Admin.create({ userName, password: hash });
    res.status(200).json({
        status: 200,
        userName,
    });
    try {
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    const { userName, password } = req.body;
    console.log(req.body);
    try {
        if (!userName || !password) {
            throw new HttpError("userName or password is empty", 401);
        }
        const admin = await Admin.findOne({ userName });
        if (!admin) {
            throw new HttpError("userName password incorrect", 400);
        }
        const match = await bcrypt.compare(password, admin.password);
        if (!match) {
            throw new HttpError("userName password incorrect", 400);
        }
        const data = {
            userName,
            role: admin.role,
        };
        const token = tokenEncode(data);
        res.status(200).json({
            status: 200,
            user: {
                userName,
                role: admin.role,
                token,
            },
        });
    } catch (error) {
        next(error);
    }
};

const listRequest = async (req, res, next) => {
    try {
        const list = await ScheduleRegiste.find({ status: 1 }, { __v: 0 });
        res.status(200).json({
            status: 200,
            list,
        });
    } catch (error) {
        next(error);
    }
};

const adminAccept = async (req, res, next) => {
    const { _id } = req.params;
    try {
        const scheduleRq = await ScheduleRegiste.findById({ _id });
        const scheduleId = scheduleRq.scheduleId;
        const schedule = await Schedule.findById({ _id: scheduleId });
        const student = await Student.findById({ _id: scheduleRq.studentId });
        const [created, de, delAcp, scheduleRegiste] = await Promise.all([
            Contract.create({
                studentId: scheduleRq.studentId,
                tutorId: schedule.tutorId,
                tutorName: schedule.tutorName,
                studentName: student.fullName,
                subject: schedule.subject,
                grade: schedule.grade,
                price: schedule.price,
                time: schedule.time,
                address: student.address,
            }),
            Schedule.findByIdAndRemove({ _id: scheduleId }),
            ScheduleAccept.findOneAndDelete({ scheduleId }),
            ScheduleRegiste.find({ scheduleId }),
        ]);
        const deleteRegisteSchedule = scheduleRegiste.map((item) => {
            let _id = item._id;
            return ScheduleRegiste.findByIdAndDelete({ _id });
        });
        await Promise.all(deleteRegisteSchedule);
        sendEmailAccept(student.email);
        res.status(200).json({
            status: 200,
            msg: "success",
        });
    } catch (error) {
        next(error);
    }
};

const adminReject = async (req, res, next) => {
    const { _id } = req.params;
    try {
        if (!_id || !mongo.Types.ObjectId.isValid(_id)) {
            throw new HttpError("schedule does not exist", 401);
        }
        const scheduleReject = await ScheduleRegiste.findById({ _id });
        if (!scheduleReject) {
            throw new HttpError("registed schedule does not exist", 400);
        }
        const scheduleAccept = await ScheduleAccept.findOne({ scheduleRegisterId: _id });
        const scheduleRegisterId = scheduleReject.scheduleRegisterId;
        const studentId = scheduleReject.studentId;
        await ScheduleAccept.findByIdAndRemove({ _id: scheduleAccept._id }); // xoa cai can admin duyet
        await ScheduleRegiste.findOneAndRemove({ scheduleRegisterId }); // xoa cai can tutor duyet

        // xoa studentID trong schedule
        const schedule = await Schedule.findOne({ _id: scheduleReject.scheduleId });
        let students = schedule.students;
        let newstudents = [];
        for (let i = 0; i < students.length; i++) {
            if (JSON.stringify(students[i]) != JSON.stringify(studentId)) {
                newstudents.push(students[i]);
            }
        }
        await Schedule.findByIdAndUpdate(
            { _id: scheduleReject.scheduleId },
            { students: newstudents }
        );
        res.status(200).json({
            status: 200,
            msg: "success",
        });
    } catch (error) {
        next(error);
    }
};

const listTutor = async (req, res, next) => {};

const removeTutor = async (req, res, next) => {};

const listStudent = async (req, res, next) => {};

const removeStudent = async () => {};

export const adminController = {
    register,
    login,
    listRequest,
    adminAccept,
    adminReject,
    listTutor,
    removeTutor,
    listStudent,
    removeStudent,
};
