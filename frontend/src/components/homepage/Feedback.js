import React from "react";
import duyan from "../../assets/images/avatar/duyan.jpg";
import bichthu from "../../assets/images/avatar/bichthu.jpg";
import trongduc from "../../assets/images/avatar/trongduc.jpg";
import trungnam from "../../assets/images/avatar/trungnam.jpg";
import quangphieu from "../../assets/images/avatar/quangphieu.jpg";

function Feedback() {
  return (
    <section className="feedback">
      <div className="text__title">
        <h2 className="h2">
          Feedbacks of <span className="text--primary">students</span>
        </h2>
      </div>
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        style={{ marginLeft: 20 }}
      >
        <div className="carousel-inner">
          <div className="item active">
            <article className="slide">
              <div className="slide__content">
                <h4 className="h4">About Phan Trong Duc</h4>
                <p>Math teacher, La Hai - Phu Yen - Viet Nam</p>
                <img src={trongduc} alt="author feedback" />
                <p>
                  Trong Duc has been a wonderful teacher for my 9 years old
                  daughter! Aside from being very knowledgeable, professional,
                  and an accomplished tutor.
                </p>
              </div>
            </article>
          </div>

          <div className="item">
            <article className="slide">
              <div className="slide__content">
                <h4 className="h4">About Le Trung Nam</h4>
                <p>Physical teacher, Ha Tinh - Viet Nam</p>
                <img src={trungnam} alt="author feedback" />
                <p>
                  Trung Nam has been absolutely pivotal in helping me
                  re-discover my passion.
                </p>
              </div>
            </article>
          </div>

          <div className="item">
            <article className="slide">
              <div className="slide__content">
                <h4 className="h4">About Vu Thi Bich Thu</h4>
                <p>Music teacher, Quang Nam - Viet Nam</p>
                <img src={bichthu} alt="author feedback" />
                <p>
                  I really love taking voice lessons with Bich Thu! It's a lot
                  of fun.
                </p>
              </div>
            </article>
          </div>
          <div className="item">
            <article className="slide">
              <div className="slide__content">
                <h4 className="h4">About Nguyen Thi Duy An</h4>
                <p>History teacher, Quang Nam - Viet Nam</p>
                <img src={duyan} alt="author feedback" />
                <p>
                  Even from the first lesson, I instantly heard a clear
                  difference in my voice! Duy An is seriously talented!!
                </p>
              </div>
            </article>
          </div>
          <div className="item">
            <article className="slide">
              <div className="slide__content">
                <h4 className="h4">About Nguyen Quang Phieu</h4>
                <p>Music teacher, Thua Thien Hue - Viet Nam</p>
                <img src={quangphieu} alt="author feedback" />
                <p>
                  I really appreciate the way Quang Phieu coaches voice
                  exercises, and I think they have immensely helped me get a
                  better tone and sound.
                </p>
              </div>
            </article>
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
          style={{ background: "none" }}
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            style={{ fontSize: 50, color: "blue" }}
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
          style={{ background: "none" }}
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            style={{ fontSize: 50, color: "blue" }}
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default Feedback;
