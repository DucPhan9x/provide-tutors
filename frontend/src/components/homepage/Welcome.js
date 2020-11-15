import React from "react";

function Welcome(props) {
  return (
    <section className="welcome">
      <div className="welcome__inner ds-primary">
        <div className="welcome__inner__text">
          <div className="text__title">
            <span className="icon-note"></span>
            <span className="icon-note-double"></span>{" "}
            <h2 className="h2 margin-b">
              Amazing <span className="primary">Teachers</span>
            </h2>
          </div>
          <p className="text--xxlarge">
            At Homemuse, you can now learn how to play your favorite instrument!
            Enjoy your weekly music lesson in the comfort of your home with an
            upbeat, positive and encouraging teacher of your choice. Choose from
            dozens of certified music instructors with experience, passion and
            outstanding qualifications. Music classes are offered to students of
            all ages and all levels in your home and online.
          </p>
        </div>
        <div className="welcome__inner__video">
          {/* <iframe
            className="radius-l"
            width="540"
            height="330"
            src="https://www.youtube.com/embed/cbFX6TGHtGA?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="music"
          ></iframe> */}
        </div>
      </div>
    </section>
  );
}

export default Welcome;
