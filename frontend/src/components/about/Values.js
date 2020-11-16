import React from "react";
import tutor_icon from "../../assets/icons/tutor_icon.png";
import values from "../../assets/images/values.png";

function Values(props) {
  return (
    <section className="values">
      <div className="values__inner">
        <div className="values__inner__text">
          <div className="text__title">
            <span>
              <img src={tutor_icon} alt="" />
            </span>
            <h2 className="h2">
              Our <span className="primary">values</span>
            </h2>
          </div>
          <span>
            <img width="100%" src={values} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Values;
