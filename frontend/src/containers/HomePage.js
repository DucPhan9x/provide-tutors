import React from "react";
import { InfoGrade } from "../components/common";
import { Recommend } from "../components/homepage";
const HomePage = () => {
  const listGrade = [{ name: "grade01" }, { name: "grade02" }];
  return (
    <section>
      <h2>Home page</h2>
      <p>Classes</p>
      <div className="flex">
        {listGrade.map((item, index) => (
          <InfoGrade name={item.name} />
        ))}
      </div>
      <Recommend />
    </section>
  );
};
export default HomePage;
