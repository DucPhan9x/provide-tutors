import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CardTeacher from "../components/ourTutors/CardTeacher";
import { getSchedule } from "../redux/actions/schedules";
import { getAuth } from "../utils/helpers";

const OurTutors = () => {
  const storeLogin = useSelector((store) => store.login);
  const auth = storeLogin.data.user || getAuth();
  useEffect(() => {
    getSchedule();
  }, []);
  const schedules = useSelector((store) => store.schedules.data).schedules;

  return (
    <div className="our-tutors">
      <h2 className="h2 text-center">
        The <span className="primary">tutors available</span>
      </h2>
      <div className="flex flex-wrap">
        {schedules &&
          schedules.map((item, index) => {
            return (
              <CardTeacher
                key={index}
                subject={item.subject}
                grade={item.grade}
                time={item.time}
                tutorName={item.tutorName}
                prices={item.price}
                image={item.image}
                auth={auth}
              />
            );
          })}
      </div>
    </div>
  );
};
export default OurTutors;
