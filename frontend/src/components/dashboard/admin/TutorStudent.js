import React, { useState } from "react";
import styled from "styled-components";
import { Table, Button } from "reactstrap";

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
  // const changeStatus = () => {};
  const [btnStatus, setBtnStatus] = useState("false");
  const [btnText, setBtnText] = useState("Accept");
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
            <tr>
              <th scope="row">1</th>
              <td>Thu</td>
              <td>An</td>
              <td>English</td>
              <td>7:00-9:00</td>
              <td>
                <Button
                  color={btnStatus === "false" ? "danger" : "success"}
                  id="btn1"
                  onClick={() => {
                    setBtnStatus("true");
                    setBtnText("Accepted");
                  }}
                >
                  {btnText}
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </StyledGeneralInfo>
  );
};

export default TutorStudent;
