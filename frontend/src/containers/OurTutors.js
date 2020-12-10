import React from "react";
import { useSelector } from "react-redux";
import CardTeacher from "../components/ourTutors/CardTeacher";
import { getAuth } from "../utils/helpers";

const OurTutors = () => {
  const storeLogin = useSelector((store) => store.login);
  const auth = storeLogin.data.user || getAuth();
  const listTutors = [
    {
      subject: "Biology",
      grade: "8",
      time: "7:00 - 9:00, Wed & 7:00 - 9:00 Sat",
      tutor_name: "Phan Trong Duc",
      prices: "200.000VND/lesson",
      image: "https://picsum.photos/200",
    },
    {
      subject: "Physics",
      grade: "8",
      time: "7:00 - 9:00, Wed & 7:00 - 9:00 Sat",
      tutor_name: "Le Trung Nam",
      prices: "200.000VND/lesson",
      image: "https://picsum.photos/204",
    },
    {
      subject: "English",
      grade: "8",
      time: "7:00 - 9:00, Wed & 7:00 - 9:00 Sat",
      tutor_name: "Nguyen Thi Duy An",
      prices: "200.000VND/lesson",
      image: "https://picsum.photos/201",
    },
    {
      subject: "Chemistry",
      grade: "8",
      time: "7:00 - 9:00, Wed & 7:00 - 9:00 Sat",
      tutor_name: "Vu Thi Bich Thu",
      prices: "200.000VND/lesson",
      image: "https://picsum.photos/202",
    },
    {
      subject: "Maths",
      grade: "8",
      time: "7:00 - 9:00, Wed & 7:00 - 9:00 Sat",
      tutor_name: "Nguyen Quang Phieu",
      prices: "200.000VND/lesson",
      image: "https://picsum.photos/203",
    },
  ];
  return (
    <div className="our-tutors">
      <h2 className="h2 text-center">
        The <span className="primary">tutors available</span>
      </h2>
      <div className="flex flex-wrap">
        {listTutors.map((item, index) => {
          return (
            <CardTeacher
              key={index}
              subject={item.subject}
              grade={item.grade}
              time={item.time}
              tutor_name={item.tutor_name}
              prices={item.prices}
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
