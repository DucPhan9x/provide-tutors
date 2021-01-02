import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Schedule } from "../../../components/dashboard/student/home";
import { ConfirmSchedule } from "../../../components/dashboard/student/home";
import { listScheduleStudentRegister } from "../../../redux/actions/listScheduleStudentRegister";
const HomeStudent = () => {
  const [listRegister, setListRegister] = useState([]);
  const storeListRegisterStudent = useSelector(
    (store) => store.listScheduleStudentRegister
  );
  useEffect(() => {
    listScheduleStudentRegister();
  }, []);
  useEffect(() => {
    if (!storeListRegisterStudent) {
      return;
    }
    setListRegister(storeListRegisterStudent.data.listRegister);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeListRegisterStudent]);

  return (
    <div>
      <Schedule />;
      <ConfirmSchedule arrRegister={listRegister} />
    </div>
  );
};
export default HomeStudent;
