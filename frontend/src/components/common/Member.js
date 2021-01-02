import React from "react";

const Member = ({ name, avt }) => {
  return (
    <div className="member">
      <img src={avt} alt={""} className="member-img" />
      <span>{name}</span>
    </div>
  );
};

export default Member;
