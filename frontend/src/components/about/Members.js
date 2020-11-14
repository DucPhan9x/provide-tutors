import React from "react";

import tutor_icon from "../../assets/icons/tutor_icon.png";
import members from "../../assets/images/members.png";

function Members() {
  return (
    <section className="about__member">
      <div className="about__member__inner ">
        <div className="about__member__inner">
          <div className="text__title">
            <span>
              <img src={tutor_icon} alt="" />
            </span>
            <h2 className="h2">
              Meet <span className="primary">our management team</span>{" "}
            </h2>
            {/* <div className="flex_row">
              Member1 Member2 Member3 Member4 Member5
            </div> */}
            <span>
              {" "}
              <img width="100%" src={members}></img>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Members;
