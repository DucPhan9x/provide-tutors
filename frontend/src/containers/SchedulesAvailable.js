import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Form, Input } from "reactstrap";
import CardTeacher from "../components/ourTutors/CardTeacher";
import { getSchedule } from "../redux/actions/schedules";
import { searchSchedule } from "../redux/actions/searchSchedule";
import { getAuth } from "../utils/helpers";

const SchedulesAvailable = () => {
  const auth = getAuth();
  const [schedules, setSchedules] = useState([]);
  const storeSchedules = useSelector((store) => store.schedules);
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const subjectOptions = [
    {
      label: "Maths",
      value: "Maths",
    },
    {
      label: "Literature",
      value: "Literature",
    },
    {
      label: "English",
      value: "English",
    },
    {
      label: "Physics",
      value: "Physics",
    },
    {
      label: "Chemistry",
      value: "Chemistry",
    },
    {
      label: "Biology",
      value: "Biology",
    },
  ];
  const gradeOptions = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
    {
      label: "5",
      value: "5",
    },
    {
      label: "6",
      value: "6",
    },
    {
      label: "7",
      value: "7",
    },
    {
      label: "8",
      value: "8",
    },
    {
      label: "9",
      value: "9",
    },
    {
      label: "10",
      value: "10",
    },
    {
      label: "11",
      value: "11",
    },
    {
      label: "12",
      value: "12",
    },
  ];

  useEffect(() => {
    getSchedule();
  }, []);

  useEffect(() => {
    if (!storeSchedules.data) {
      return;
    }
    setSchedules(storeSchedules.data.schedules);
  }, [storeSchedules]);

  return (
    <div className="schedule-available">
      <h2 className="h2 text-center">
        The <span className="primary">schedules available</span>
      </h2>
      <div className="form--search">
        <Form className="form">
          <Input
            className="type__subject"
            name="subject"
            type="select"
            placeholder="Subject"
            value={subject}
            onChange={(event) => {
              setSubject(event.target.value);
            }}
          >
            <option>Select subject</option>
            {subjectOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </Input>
          <Input
            className="type__grade"
            name="Grade"
            type="select"
            value={grade}
            placeholder="Grade"
            onChange={(event) => {
              setGrade(event.target.value);
            }}
          >
            <option>Select grade</option>
            {gradeOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </Input>
        </Form>
        <Button
          className="btn--search"
          style={{ background: "orange", color: "black", outline: "none" }}
          disabled={!subject && !grade}
          onClick={() => {
            const type = { subject: subject, grade: grade };
            searchSchedule(type, (data) => {
              if (data.status === 200) {
                setSchedules(data.schedules);
              } else {
                alert(data.msg);
              }
            });
          }}
        >
          Search
        </Button>
        <Button
          className="btn--clear"
          style={{
            background: "green",
            color: "white",
            outline: "none",
            marginLeft: 20,
          }}
          onClick={() => {
            setSchedules(storeSchedules.data.schedules);
            setGrade("");
            setSubject("");
          }}
        >
          Clear
        </Button>
      </div>
      <div className="flex flex-wrap">
        {schedules &&
          schedules.map((item, index) => {
            return (
              <CardTeacher
                key={index}
                subject={item.subject}
                grade={item.grade}
                time={item.time.join(" and ")}
                tutorName={item.tutorName}
                prices={item.price}
                image={item.image}
                auth={auth}
                scheduleId={item._id}
                status={item.status}
                tutorId={item.tutorId}
              />
            );
          })}
      </div>
    </div>
  );
};
export default SchedulesAvailable;
