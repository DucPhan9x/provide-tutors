import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ConfirmSchedule } from "../../../components/dashboard/tutor/mystudent";
import { listStudentRegister } from "../../../redux/actions/listStudentRegister";

const MyStudent = () => {
  const [studentsRegister, setStudentsRegister] = useState([]);
  const storeGetStudentRegister = useSelector(
    (store) => store.listStudentRegister
  );
  useEffect(() => {
    listStudentRegister();
  }, []);
  useEffect(() => {
    if (!storeGetStudentRegister) {
      return;
    }
    console.log(storeGetStudentRegister.data);
    setStudentsRegister(storeGetStudentRegister.data.listRegiste);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeGetStudentRegister]);
  return (
    <div>
      <ConfirmSchedule arrStudents={studentsRegister} />
    </div>
  );
};
export default MyStudent;
