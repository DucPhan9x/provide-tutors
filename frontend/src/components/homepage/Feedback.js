import React from "react";
import Slider from "react-slick";
// import Author1Feedback from "../../assets/images/jeanne.png";
// import Author2Feedback from "../../assets/images/brandon.png";
// import Author3Feedback from "../../assets/images/asuka.png";

function Feedback() {
  // const [settings, setSettings] = React.useState({
  //   dots: false,
  //   infinite: true,
  //   speed: 1500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   fade: true,
  // });

  // React.useLayoutEffect(() => {
  //   function slides() {
  //     if (window.innerWidth <= 700) {
  //       setSettings({ ...settings, dots: true });
  //     } else {
  //       setSettings({ ...settings, dots: false });
  //     }
  //   }
  //   window.addEventListener("resize", slides);
  //   slides();
  //   return () => window.removeEventListener("resize", slides);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <section className="feedback">
      <div className="feedback__inner">
        <div className="text__title">
          <span className="icon-note"></span>
          <span className="icon-note-double"></span>
          <h2 className="h2">
            What <span className="text--primary">students</span> say
          </h2>
        </div>
        {/* <Slider {...settings}>
          <article className="slide">
            <div className="slide__content">
              <h4 className="h4">About Jeanne</h4>
              <p>Piano teacher, San Francisco</p>
              <img src={Author1Feedback} alt="author feedback" />
              <p>
                Jeanne has been a wonderful teacher for my 9 years old daughter!
                Aside from being very knowledgeable, professional, and an accomplished musician,
                she is kind, encouraging, supportive, and fun!
                Jeanne challenges my daughter to become a better pianist while helping her love of music grow.
              </p>
            </div>
          </article>
          <article className="slide">
            <div className="slide__content">
              <h4 className="h4">About Brandon</h4>
              <p>Guitar teacher, Nashville</p>
              <img src={Author2Feedback} alt="author feedback" />
              <p>
                Brandon has been absolutely pivotal in helping me re-discover my passion for music as an adult.
                He communicates his knowledge and expertise in a manner that is both entertaining and challenging.
                For the first time ever, I come home from our lessons actually wanting to practice and improve,
                and attribute much of this to Brandon's genuine passion for music and talent as a teacher.
              </p>
            </div>
          </article>
          <article className="slide">
            <div className="slide__content">
              <h4 className="h4">About Asuka</h4>
              <p>Voice teacher, New York City</p>
              <img src={Author3Feedback} alt="author feedback" />
              <p>
                I really love taking voice lessons with Asukai! It's a lot of fun,
                and I can tell that she listens very well because she immediately helps me with the areas
                I struggle with - whenever I come across them in the music.
                I really appreciate the way she coaches voice exercises,
                and I think they have immensely helped me get a better tone and sound.
                Even from the first lesson, I instantly heard a clear difference in my voice!
                She is seriously talented!!
              </p>
            </div>
          </article>
        </Slider> */}
      </div>
    </section>
  );
}

export default Feedback;
