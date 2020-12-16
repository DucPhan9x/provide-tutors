import React from "react";
const Subject = ({ name, amountTutor, image }) => {
  return (
    <div className="subject">
      <img src={image} alt="" />
      <div className="subject--text flex flex-col">
        <span>Subject: {name}</span>
        <span>{amountTutor} tutors</span>
      </div>
    </div>
  );
};
export default Subject;
