import React from "react";
import { Banner, Feedback, Subject } from "../components/homepage";
import tempImage from "../assets/images/homepage_banner.jpg";
function HomePage(props) {
  const listSubject = [
    { name: "Math - 08", amountTutor: 2, image: tempImage },
    { name: "Physical - 07", amountTutor: 0, image: tempImage },
    { name: "Chemistry - 08", amountTutor: 2, image: tempImage },
    { name: "History", amountTutor: 2, image: tempImage },
    { name: "Biology - 09", amountTutor: 2, image: tempImage },
    { name: "Physical - 07", amountTutor: 0, image: tempImage },
    { name: "Chemistry - 08", amountTutor: 2, image: tempImage },
    { name: "History - 12", amountTutor: 2, image: tempImage },
    { name: "English -10", amountTutor: 2, image: tempImage },
  ];
  return (
    <>
      <Banner />
      <div className="subject-list">
        <h2 className="h2">
          Our <span className="text--primary">subjects current</span>
        </h2>
        <div className="subject-list__items flex">
          {listSubject.map((item, index) => {
            return (
              <Subject
                name={item.name}
                amountTutor={item.amountTutor}
                image={item.image}
              />
            );
          })}
        </div>
      </div>

      <Feedback />
    </>
  );
}

export default HomePage;
