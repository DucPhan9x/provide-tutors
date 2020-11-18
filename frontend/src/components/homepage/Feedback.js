import React from "react";
import tempImage from "../../assets/images/homepage_banner.jpg";

function Feedback() {
  return (
    <section className="feedback">
      <div className="text__title">
        <h2 className="h2">
          Feedbacks of <span className="text--primary">students</span>
        </h2>
      </div>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            class="active"
            style={{ background: "blue", fontSize: 60 }}
          ></li>
          <li
            data-target="#myCarousel"
            data-slide-to="1"
            style={{ background: "blue", fontSize: 60 }}
          ></li>
          <li
            data-target="#myCarousel"
            data-slide-to="2"
            style={{ background: "blue", fontSize: 60 }}
          ></li>
          <li
            data-target="#myCarousel"
            data-slide-to="3"
            style={{ background: "blue", fontSize: 60 }}
          ></li>
          <li
            data-target="#myCarousel"
            data-slide-to="4"
            style={{ background: "blue", fontSize: 60 }}
          ></li>
        </ol>

        <div class="carousel-inner">
          <div class="item active">
            <article className="slide">
              <div className="slide__content">
                <h4 className="h4">About Phan Trong Duc</h4>
                <p>Math class 12 teacher, La Hai - Phu Yen - Viet Nam</p>
                <img src={tempImage} alt="author feedback" />
                <p>
                  Jeanne has been a wonderful teacher for my 9 years old
                  daughter! Aside from being very knowledgeable, professional,
                  and an accomplished musician, she is kind, encouraging,
                  supportive, and fun! Jeanne challenges my daughter to become a
                  better pianist while helping her love of music grow.
                </p>
              </div>
            </article>
          </div>

          <div class="item">
            <article className="slide">
              <div className="slide__content">
                <h4 className="h4">About Le Trung Nam</h4>
                <p>Physical teacher, Ha Tinh - Viet Nam</p>
                <img src={tempImage} alt="author feedback" />
                <p>
                  Brandon has been absolutely pivotal in helping me re-discover
                  my passion for music as an adult. He communicates his
                  knowledge and expertise in a manner that is both entertaining
                  and challenging. For the first time ever, I come home from our
                  lessons actually wanting to practice and improve, and
                  attribute much of this to Brandon's genuine passion for music
                  and talent as a teacher.
                </p>
              </div>
            </article>
          </div>

          <div class="item">
            <article className="slide">
              <div className="slide__content">
                <h4 className="h4">About Vu Thi Bich Thu</h4>
                <p>Music teacher, Quang Nam - Viet Nam</p>
                <img src={tempImage} alt="author feedback" />
                <p>
                  I really love taking voice lessons with Asukai! It's a lot of
                  fun, and I can tell that she listens very well because she
                  immediately helps me with the areas I struggle with - whenever
                  I come across them in the music. I really appreciate the way
                  she coaches voice exercises, and I think they have immensely
                  helped me get a better tone and sound. Even from the first
                  lesson, I instantly heard a clear difference in my voice! She
                  is seriously talented!!
                </p>
              </div>
            </article>
          </div>
          <div class="item">
            <article className="slide">
              <div className="slide__content">
                <h4 className="h4">About Nguyen Thi Duy An</h4>
                <p>History teacher, Quang Nam - Viet Nam</p>
                <img src={tempImage} alt="author feedback" />
                <p>
                  I really love taking voice lessons with Asukai! It's a lot of
                  fun, and I can tell that she listens very well because she
                  immediately helps me with the areas I struggle with - whenever
                  I come across them in the music. Even from the first lesson, I
                  instantly heard a clear difference in my voice! She is
                  seriously talented!!
                </p>
              </div>
            </article>
          </div>
          <div class="item">
            <article className="slide">
              <div className="slide__content">
                <h4 className="h4">About Nguyen Quang Phieu</h4>
                <p>Music teacher, Thua Thien Hue - Viet Nam</p>
                <img src={tempImage} alt="author feedback" />
                <p>
                  I really appreciate the way she coaches voice exercises, and I
                  think they have immensely helped me get a better tone and
                  sound. Even from the first lesson, I instantly heard a clear
                  difference in my voice! She is seriously talented!!
                </p>
              </div>
            </article>
          </div>
        </div>

        <a
          class="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
          style={{ background: "none" }}
        >
          <span
            class="glyphicon glyphicon-chevron-left"
            style={{ fontSize: 50, color: "blue" }}
          ></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="right carousel-control"
          href="#myCarousel"
          data-slide="next"
          style={{ background: "none" }}
        >
          <span
            class="glyphicon glyphicon-chevron-right"
            style={{ fontSize: 50, color: "blue" }}
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default Feedback;
