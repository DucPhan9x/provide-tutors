import React, { useEffect } from "react";
import { Schedule } from "../../../components/dashboard/tutor/mystudent";
import { ConfirmSchedule } from "../../../components/dashboard/tutor/mystudent";

const MyStudent = () => {
  useEffect(() => {
    console.log("my student");
  }, []);
  return (
    <div>
      <Schedule />;
      <ConfirmSchedule />
    </div>
  );
};
export default MyStudent;
