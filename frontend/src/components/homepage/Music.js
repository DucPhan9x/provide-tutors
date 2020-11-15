import React from "react";
import Slider from "react-slick";

// import PIANO from "../../assets/images/piano.png";
// import GUITAR from "../../assets/images/guitar.png";
// import VOICE from "../../assets/images/voice.png";
// import UKULELE from "../../assets/images/ukulele.png";
// import DRUMS from "../../assets/images/drums.png";
// import VIOLIN from "../../assets/images/violin.png";
// import CELLO from "../../assets/images/cello.png";
// import FLUTE from "../../assets/images/flute.png";
// import SAXOPHONE from "../../assets/images/saxo.png";
// import BASSGUITAR from "../../assets/images/bass.png";
// import VIOLA from "../../assets/images/viola.png";
// import TRUMPET from "../../assets/images/trumpet.png";
// import FRENCHHORN from "../../assets/images/french-horn.png";
// import BASSOON from "../../assets/images/bassoon.png";
// import TROMBONE from "../../assets/images/trombone.png";
// import MUSIC_THEORY from "../../assets/images/music_theory.png";
// import COMPOSITION from "../../assets/images/composition.png";
// import UPRIGHT_BASS from "../../assets/images/upright_bass.png";
// import { Loading } from "../common";

// function getInstrumentSrc(instrumentName) {
//   switch (instrumentName) {
//     case "pinano":
//       return PIANO;
//     case "voice":
//       return VOICE;
//     case "guitar":
//       return GUITAR;
//     case "violin":
//       return VIOLIN;
//     case "drums":
//       return DRUMS;
//     case "cello":
//       return CELLO;
//     case "ukulele":
//       return UKULELE;
//     case "flute":
//       return FLUTE;
//     case "saxophone":
//       return SAXOPHONE;
//     case "bass guitar":
//       return BASSGUITAR;
//     case "viola":
//       return VIOLA;
//     case "trumpet":
//       return TRUMPET;
//     case "french horn":
//       return FRENCHHORN;
//     case "bassoon":
//       return BASSOON;
//     case "music theory":
//       return MUSIC_THEORY;
//     case "trombone":
//       return TROMBONE;
//     case "composition":
//       return COMPOSITION;
//     case "upright bass":
//       return UPRIGHT_BASS;
//     default:
//       return PIANO;
//   }
// }

function Music() {
  //   const [slick, setSlick] = React.useState(0);
  //   const [settings, setSettings] = React.useState({
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 4,
  //     afterChange: (slick) => {
  //       setSlick(slick);
  //     },
  //   });
  //   const isLoading = dataAllTeacher.loading;
  //   React.useLayoutEffect(() => {
  //     function slides() {
  //       if (window.innerWidth <= 450) {
  //         setSettings({ ...settings, slidesToShow: 1, slidesToScroll: 1 });
  //       } else if (window.innerWidth <= 760) {
  //         setSettings({ ...settings, slidesToShow: 2, slidesToScroll: 2 });
  //       } else if (window.innerWidth <= 1000) {
  //         setSettings({ ...settings, slidesToShow: 3, slidesToScroll: 3 });
  //       } else if (window.innerWidth > 1000) {
  //         setSettings({ ...settings, slidesToShow: 4, slidesToScroll: 4 });
  //       }
  //     }
  //     window.addEventListener("resize", slides);
  //     slides();
  //     return () => window.removeEventListener("resize", slides);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   const totalPages = Math.ceil(
  //     dataAllTeacher.dataFilter &&
  //       Object.keys(dataAllTeacher.dataFilter).length / settings.slidesToShow
  //   );
  //   const currentPage = Math.floor(slick / settings.slidesToShow) + 1;
  return (
    <section className="music">
      {/* {isLoading ? (
        <Loading />
      ) : (
        <div className="music__inner">
          <div className="music__title">
            <span className="icon-note"></span>
            <span className="icon-note-double"></span>{" "}
            <h2 className="h2 ">
              One-on-One{" "}
              <span className="text--primary">private music lessons </span> are
              available for
            </h2>
          </div>
          <div className="music__carousel">
            <div className="music__pagination">{`${currentPage}/${totalPages}`}</div>
            <Slider
              {...settings}
              slidesToShow={
                settings.slidesToShow >
                Object.keys(dataAllTeacher.dataFilter).length
                  ? Object.keys(dataAllTeacher.dataFilter).length
                  : settings.slidesToShow
              }
            >
              {Object.keys(dataAllTeacher.dataFilter).map((item, index) => (
                <article className="slide" key={index}>
                  <div
                    className="slide__content"
                    onClick={handleClickInstrument(item)}
                  >
                    <img src={getInstrumentSrc(item)} alt={item} />
                    <div className="slide__text">
                      <p className="slide__text__title">{item}</p>
                      <p className="slide__text__subtitle">
                        {dataAllTeacher.dataFilter &&
                          dataAllTeacher.dataFilter[item].length}{" "}
                        {dataAllTeacher.dataFilter[item].length === 1 ? "teacher" : "teachers" } available
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </Slider>
          </div>
        </div>
      )} */}
    </section>
  );
}

export default Music;
