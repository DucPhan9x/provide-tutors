import React from "react";
// import { Link } from "react-router-dom";
// import { MutiSelect } from "../common";
// import Search from "../../assets/images/fasearch.svg";
// import { getInstruments } from "../../redux/actions/instruments";
import ReactGA from "react-ga";
import homepage_banner from "../../assets/images/tutor_student/tutor_student_1.jpg";
import { Container, Col, Row } from "reactstrap"
//import { useSelector } from "react-redux";

function Banner() {
  //  const storeInstruments = useSelector(
  //  (store) => store.instruments.data.instruments
  // );

  // const optionInstruments = storeInstruments
  //   ? storeInstruments.map((item, index) => {
  //   return {
  //      value: item.name,
  //      label: item.name.charAt(0).toUpperCase() + item.name.slice(1),
  //    };
  //  })
  //  : [];

  //   React.useEffect(() => {
  //     if (!storeInstruments) {
  //       getInstruments();
  //     }
  //   }, [storeInstruments]);

  //   const handleGaTracking = () => {
  //     ReactGA.event({
  //       category: "Search & Navigation",
  //       action: "Search Music Teachers & Navigation to Teachers Page at Homepage",
  //     });
  //     if (instruments) {
  //       instruments.forEach((item) => {
  //         ReactGA.event({
  //           category: "Instruments Filter",
  //           action: item.label,
  //         });
  //       });
  //     }
  //   };

  return (
    <section className="banner">
      <div className="banner__inner clearfix ds-primary">
        <div className="banner__text">
          <table>
            <tr>
              <td>
                <h1 className="h1">
                  Provides qualified lessons <span></span>
                </h1>
                <br></br>
                <h2 className="h2">
                  by the <span className="text--primary">Best Tutors</span>
                </h2></td>
              <td >
                <img src={homepage_banner} alt="" width="300" height="300"></img>
              </td>
            </tr>
            {/* <tr>
              <td></td>
              <td><img src={homepage_banner} alt="" width="300" height="300"></img></td>
            </tr> */}
          </table>

        </div>
      </div>
    </section>
  );
}

export default Banner;
