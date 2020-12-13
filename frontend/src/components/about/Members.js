import React from "react";
import Member from "../common/Member";

import tutor_icon from "../../assets/icons/tutor_icon.png";
import duyan from "../../assets/images/members/duyan-member.png";
import bichthu from "../../assets/images/members/bichthu-member.png";
import trongduc from "../../assets/images/members/trongduc-member.png";
import trungnam from "../../assets/images/members/trungnam-member.png";
import quangphieu from "../../assets/images/members/quangphieu-member.png";

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
            <div className="members">
              <Member name="Trung Nam" avt={trungnam} />
              <Member name="Bich Thu" avt={bichthu} />
              <Member name="Trong Duc" avt={trongduc} />
              <Member name="Duy An" avt={duyan} />
              <Member name="Quang Phieu" avt={quangphieu} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Members;
