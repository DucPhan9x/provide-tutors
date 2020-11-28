import { Student, ScheduleRegiste, Schedule, Contract } from "../models";
import { HttpError } from "../constants";

const getInfo = async (req, res, next) => {
    const { id } = req.user;
    try {
        const student = await Student.findById(
            { _id: id },
            { password: 0, __v: 0, _id: 0, role: 0 }
        );
        res.status(200).json({
            status: 200,
            student,
        });
    } catch (error) {
        next(error);
    }
};

const updateInfo = async (req, res, next) => {
    const { id } = req.user;
    try {
        const { phone, birthday, fullName, address, gender, email } = req.body;
        await Student.findOneAndUpdate(
            { _id: id },
            {
                phone,
                fullName,
                address,
                gender,
                birthday,
                email,
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

const chooseSchedule = async (req, res, next) => {
    const studentId = req.user.id;
    console.log(studentId);
    const scheduleId = req.body.scheduleId;

    try {
        const schedule = await Schedule.findById({ _id: scheduleId });
        if (!schedule) {
            throw new HttpError("Schedule does not exist", 404);
        }

        const [student, registes, contracts] = await Promise.all([
            Student.findById({ _id: studentId }),
            ScheduleRegiste.find({ studentId }),
            Contract.find({ studentId }),
        ]);
        const time = schedule.time;

        let timeContract = [];
        for (let i = 0; i < contracts.length; i++) {
            timeContract = [...timeContract, ...contracts[i].time];
        }

        // check trung vs lich hoc
        for (let i = 0; i < timeContract.length; i++) {
            for (let j = 0; j < time.length; j++) {
                if (timeContract[i].includes(time[j])) {
                    throw new HttpError("Time has coincided with the class schedule", 400);
                }
            }
        }
        // check trung voi cai da chon
        for (let i = 0; i < registes.length; i++) {
            for (let j = 0; j < time.length; j++) {
                if (registes[i].time.includes(time[j])) {
                    throw new HttpError("the time you selected has coincided", 400);
                }
            }
        }
        let students = schedule.students;
        students.push(studentId);
        console.log(student);
        await Schedule.findByIdAndUpdate({ _id: scheduleId }, { students });
        await ScheduleRegiste.create({
            scheduleId,
            studentId,
            tutorId: schedule.tutorId,
            studentName: student.fullName,
            grade: schedule.grade,
            subject: schedule.subject,
            time: schedule.time,
        });

        res.status(200).json({
            status: 200,
            msg: "success",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const listContract = async (req, res, next) => {
    const { id } = req.user;
    try {
        const contracts = await Contract.find(
            { studentId: id },
            { __v: 0, time_created: 0, studentId: 0 }
        );
        res.status(200).json({
            status: 200,
            contracts,
        });
    } catch (error) {
        next(error);
    }
};

export const studentController = {
    getInfo,
    updateInfo,
    chooseSchedule,
    listContract,
};
