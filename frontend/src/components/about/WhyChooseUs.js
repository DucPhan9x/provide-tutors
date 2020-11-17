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
          <h2 className="h2">
            <span>
              <img src={tutor_icon} alt="" />
            </span>
            Why <span className="primary">choose us?</span>
          </h2>
        </div>
        <div className="items">
          <div className="item">
            <div className="item__inner">
              <img width="300px" height="300px" src={tutor_student_1} alt="" />
              <div className="item__inner__text">
                <h3 className="h3 underline underline--secondary">
                  Individual and unique learning experience
                </h3>
                <p className="text--xlarge">
                  Your child will receive an individualized learning experience
                  he or she can’t always get in a classroom setting. Tutors can
                  customize the lessons and activities just for your child.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__inner">
              <img width="300px" height="300px" src={tutor_student_3} alt="" />
              <div className="item__inner__text">
                <h3 className="h3 underline underline--primary">
                  Improves academic performance
                </h3>
                <p className="text--xlarge">
                  Tutoring will prepare your child for tests and exams, while
                  tutors work with your child on specific problem areas. Your
                  child’s grades and understanding of the subject will
                  significantly improve when working with a tutor.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__inner">
              <img width="300px" height="300px" src={tutor_student_2} alt="" />
              <div className="item__inner__text">
                <h3 className="h3 underline underline--blue">
                  One-on-one attention
                </h3>
                <p className="text--xlarge">
                  Tutors get to know your child’s individual learning style and
                  can adapt teaching methods accordingly. They act as your
                  child’s own private teacher.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item__inner">
              <img width="300px" height="300px" src={tutor_student_4} alt="" />
              <div className="item__inner__text">
                <h3 className="h3 underline underline--primary">
                  Improves work and study habits
                </h3>
                <p className="text--xlarge">
                  Through tutoring, your child will learn work and study habits
                  he or she will use for life. These skills will help prepare
                  your child to successfully achieve his or her goals both
                  inside and outside of school.
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
