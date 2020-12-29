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
  const [subject, setSubject] = useState();
  const [grade, setGrade] = useState();

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
    <div className="our-tutors">
      <h2 className="h2 text-center">
        The <span className="primary">tutors available</span>
      </h2>
      <div>
        <Form>
          <Input
            name="subject"
            placeholder="Subject"
            onChange={(event) => {
              setSubject(event.target.value);
            }}
          />
          <Input
            name="Grade"
            type="number"
            placeholder="Grade"
            onChange={(event) => {
              setGrade(Number(event.target.value));
            }}
          />
        </Form>
        <Button
          disabled={!subject && !grade}
          onClick={() => {
            const type = { subject: subject, grade: grade };
            searchSchedule(type, (data) => {
              if (data.status) {
                console.log(data.schedules);
              } else {
                alert(data.msg);
              }
            });
          }}
        >
          Search
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
