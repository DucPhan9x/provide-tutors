import React from "react";
import tutor_student_1 from "../../assets/images/tutor_student/tutor_student_1.jpg";
import tutor_student_2 from "../../assets/images/tutor_student/tutor_student_2.jpg";
import tutor_student_3 from "../../assets/images/tutor_student/tutor_student_3.jpg";
import tutor_student_4 from "../../assets/images/tutor_student/tutor_student_4.jpg";
import tutor_icon from "../../assets/icons/tutor_icon.png";

function WhyChooseUs(props) {
  return (
    <section className="why-chooseus">
      <div className="why-chooseus__inner">
        <div className="text__title">
          <span>
            <img src={tutor_icon} alt="" />
          </span>
          <h2 className="h2">
            Why <span className="primary">choose us?</span>
          </h2>
        </div>
        <div className="items">
          <div className="item">
            <div className="item__inner">
              <img width="300px" height="300px" src={tutor_student_1} alt="" />
              <div className="item__inner__text">
                <h3 className="h3 underline underline--secondary">
                  Customized Learning
                </h3>
                <p className="text--xlarge">
                  Choose your music teacher for 1-on-1 music lessons based on
                  your goals and interests
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__inner">
              <img width="300px" height="300px" src={tutor_student_2} alt="" />
              <div className="item__inner__text">
                <h3 className="h3 underline underline--primary">
                  Pay per lesson
                </h3>
                <p className="text--xlarge">
                  At Homemuse, you only pay per lesson and at the price that
                  meets your budget
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__inner">
              <img width="300px" height="300px" src={tutor_student_3} alt="" />
              <div className="item__inner__text">
                <h3 className="h3 underline underline--blue">
                  Anytime, Anywhere
                </h3>
                <p className="text--xlarge">
                  Take in-person or online lessons at the time and place that
                  suits you
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__inner">
              <img width="300px" height="300px" src={tutor_student_4} alt="" />
              <div className="item__inner__text">
                <h3 className="h3 underline underline--primary">
                  Pay per lesson
                </h3>
                <p className="text--xlarge">
                  At Homemuse, you only pay per lesson and at the price that
                  meets your budget
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
