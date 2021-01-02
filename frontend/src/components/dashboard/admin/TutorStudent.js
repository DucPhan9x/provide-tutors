import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table, Button } from "reactstrap";
import { listAdminNeedAccept } from "../../../redux/actions/listAdminNeedAccept";
import { useSelector } from "react-redux";
import { adminAccept } from "../../../redux/actions/adminAccept";
import { adminDenied } from "../../../redux/actions/adminDenied";

const StyledGeneralInfo = styled.section`
  .table-admin {
    padding: 30px 20px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: #ffffff;
  }
`;

const TutorStudent = () => {
  const [listTutor_Student, setListTutor_Student] = useState([]);
  const storeAdminNeedAccept = useSelector(
    (store) => store.listAdminNeedAccept
  );
  useEffect(() => {
    listAdminNeedAccept();
  }, []);
  useEffect(() => {
    if (!storeAdminNeedAccept.data.list) {
      return;
    }
    setListTutor_Student(storeAdminNeedAccept.data.list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeAdminNeedAccept]);
  return (
    <StyledGeneralInfo>
      <div className="table-admin">
        <Table hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Tutor</th>
              <th>Student</th>
              <th>Subject</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listTutor_Student &&
              listTutor_Student.map((item) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>{item.tutorName}</td>
                    <td>{item.studentName}</td>
                    <td>{item.subject + " - " + item.grade}</td>
                    <td>{item.time.join(" and ")}</td>
                    <td>
                      <Button
                        color={"success"}
                        // disabled={item.status}
                        onClick={() => {
                          adminAccept(item._id, (data) => {
                            if (data.status === 200) {
                              alert("Accept succeed!");
                            } else {
                              alert("Accept failed, " + data.msg);
                            }
                          });
                        }}
                      >
                        Accept
                      </Button>
                    </td>
                    <td>
                      <Button
                        color={"danger"}
                        // disabled={item.status}
                        onClick={() => {
                          adminDenied(item._id, (data) => {
                            if (data.status === 200) {
                              alert("Denied succeed!");
                            } else {
                              alert("Denied failed, " + data.msg);
                            }
                          });
                        }}
                      >
                        Deny
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </StyledGeneralInfo>
  );
};

export default TutorStudent;
