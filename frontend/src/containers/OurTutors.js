import React from "react";
import CardTeacher from "../components/ourTutors/CardTeacher";

const OurTutors = () => {
  const listTutors = [
    {
      name: "Phan Trong Duc",
      birthYear: 1999,
      experiences: "12/12",
      subjects: ["Math", "Biology"],
      rating: 2,
      prices: "200.000VND/lesson",
      image: "https://picsum.photos/200",
      instruments: "Teacher is very good",
    },
    {
      name: "Nguyen Thi Duy An",
      birthYear: 1999,
      experiences: "12/12",
      subjects: ["English", "History"],
      rating: 5,
      prices: "500.000VND/lesson",
      image: "https://picsum.photos/202",
      instruments: "Teacher is very good",
    },
    {
      name: "Nguyen Quang Phieu",
      birthYear: 1999,
      experiences: "12/12",
      subjects: ["Chemistry", "Math"],
      rating: 7,
      prices: "800.000VND/lesson",
      image: "https://picsum.photos/210",
      instruments: "Teacher is very good",
    },
    {
      name: "Vu Thi Bich Thu",
      birthYear: 1999,
      experiences: "12/12",
      subjects: ["English", "Biology"],
      rating: 2,
      prices: "600.000VND/lesson",
      image: "https://picsum.photos/222",
      instruments: "Teacher is very good",
    },
    {
      name: "Le Trung Nam",
      birthYear: 1999,
      experiences: "12/12",
      subjects: ["Python", "Nodejs"],
      rating: 2,
      prices: "1.000.000VND/lesson",
      image: "https://picsum.photos/300",
      instruments: "Teacher is very good",
    },
  ];
  return (
    <div className="our-tutors">
      <h2 className="h2 text-center">
        Our <span className="primary">tutors</span>
      </h2>
      <div className="flex flex-wrap">
        {listTutors.map((item, index) => {
          return (
            <CardTeacher
              name={item.name}
              birthYear={item.birthYear}
              experiences={item.experiences}
              subjects={item.subjects}
              rating={item.rating}
              prices={item.prices}
              image={item.image}
              instruments={item.instruments}
            />
          );
        })}
      </div>
    </div>
  );
};
export default OurTutors;
