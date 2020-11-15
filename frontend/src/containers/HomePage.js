// import React from "react";
// import { InfoGrade } from "../components/common";
// import { Recommend } from "../components/homepage";
// const HomePage = () => {
//   const listGrade = [{ name: "grade01" }, { name: "grade02" }];
//   return (
//     <section>
//       <h2>Home page</h2>
//       <p>Classes</p>
//       <div className="flex">
//         {listGrade.map((item, index) => (
//           <InfoGrade name={item.name} />
//         ))}
//       </div>
//       <Recommend />
//     </section>
//   );
// };
// export default HomePage;

import React from "react";
// import { useSelector } from "react-redux";
import {
  Banner,
  Welcome,
  Music,
  Feedback,
  Recommend,
} from "../components/homepage";

//import { updateFilter } from "../redux/actions/teachers";
//import { getAllTeachers } from "../redux/actions/global";
//import { useHistory } from "react-router-dom";

function HomePage(props) {
  // const [instruments, setInstruments] = React.useState(null);
  //const filter = useSelector((store) => store.teachers.filter);

  // const handleChangeInstruments = (value) => {
  //   updateFilter({ ...filter, instruments: value });
  //   setInstruments(value);
  // };

  // const history = useHistory();
  // const handlefilterInstrument = (item) => () => {
  //   updateFilter({
  //     ...filter,
  //     instruments: [{ value: item, label: item }],
  //   });
  //   history.push({
  //     pathname: "/teachers",
  //     state: { isSearchInstrument: true },
  //   });
  // };

  //const dataAllTeacher = useSelector((store) => store.global.allTeachers);
  // React.useEffect(() => {
  //  if (!Object.keys(dataAllTeacher.data).length && !dataAllTeacher.loading) {
  //    getAllTeachers();
  //  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //  }, []);
  return (
    <>
      <Banner />
      <Welcome />
      <Music
      //   dataAllTeacher={dataAllTeacher}
      //  handleClickInstrument={handlefilterInstrument}
      />
      <Recommend></Recommend>
      {/* <LearningSolution /> */}
      <Feedback />
    </>
  );
}

export default HomePage;
