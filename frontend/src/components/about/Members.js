import React from "react";

import tutor_icon from "../../assets/icons/tutor_icon.png";
import members from "../../assets/images/members.png";

function Members() {
  return (
    <section className="about_member">
      <div className="about_member__inner ">
        <div className="about_member__inner__text">
          <div className="text__title">
            <h2 className="h2">
              <span>
                <img src={tutor_icon} alt="" />
              </span>
              Meet <span className="primary">our management team</span>{" "}
            </h2>
            <span>
              <img width="100%" src={members} alt="members"></img>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Members;
