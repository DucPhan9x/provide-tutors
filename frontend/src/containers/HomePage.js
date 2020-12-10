import React from "react";
import { Banner, Feedback, Subject } from "../components/homepage";
import Maths from "../assets/images/subject/Maths.png";
import Literature from "../assets/images/subject/Literature.png";
import English from "../assets/images/subject/English.png";
import Physics from "../assets/images/subject/Physics.png";
import Chemistry from "../assets/images/subject/Chemistry.png";
import Biology from "../assets/images/subject/Biology.png";
function HomePage(props) {
  const listSubject = [
    { name: "Maths", amountTutor: 0, image: Maths },
    { name: "Physics", amountTutor: 0, image: Physics },
    { name: "Chemistry", amountTutor: 0, image: Chemistry },
    { name: "Literature", amountTutor: 0, image: Literature },
    { name: "Biology", amountTutor: 0, image: Biology },
    { name: "English", amountTutor: 0, image: English },
  ];
  return (
    <>
      <Banner />
      <div className="subject-list">
        <h2 className="h2">
          The <span className="text--primary">subjects available</span>
        </h2>
        <div className="subject-list__items flex">
          {listSubject.map((item, index) => {
            return <Subject image={item.image} key={index} />;
          })}
        </div>
      </div>
      <Feedback />
    </>
  );
}

export default HomePage;
