import React from "react";
import homepage_banner from "../../assets/images/tutor_student/tutor_student_1.jpg";
function Banner() {
  return (
    <section className="banner">
      <div className="banner__inner clearfix flex space-between items-center">
        <div className="banner__inner__text">
          <h1 className="h1">
            Provides qualified lessons <span></span>
          </h1>
          <br></br>
          <h2 className="h2">
            by the <span className="text--primary">Best Tutors</span>
          </h2>
        </div>
        <div className="banner__inner__image">
          <img src={homepage_banner} alt="" width="650" height="350"></img>
        </div>
      </div>
    </section>
  );
}

export default Banner;
