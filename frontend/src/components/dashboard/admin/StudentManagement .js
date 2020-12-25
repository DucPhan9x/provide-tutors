import React, { useState } from "react";
import styled from "styled-components";
import { Table, Button, Form, Label } from "reactstrap";
import { FGroup } from "../../common/";

import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

const StyledStudentManagement = styled.section`
  .table-admin {
    padding: 30px 20px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: #ffffff;
  }
`;

const StyledGeneralInfo = styled.section`

  .form-info {
   
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .form__item {
      float: left;
      width: 50%;
      text-align: left;
      margin-bottom: 10px;
      margin-top: 10px;

    }
    label {
      margin-left: 10px;
      font-size: 14px;
      font-weight: 600;
    }
    
    .form-group {
      margin: 0 10px 20px 10px;
      input {
        min-height: 36px;
        border-radius: 4px;
        font-size: 12px;
        padding: 8px;
      }
    }
`;

const StudentManagement = () => {
  const [btnStatus, setBtnStatus] = useState("false");
  const [btnText, setBtnText] = useState("Block");

  const [show, setShow] = useState(false);
  const [studentSelected, setStudentSelected] = useState(null);

  const students = [
    {
      studentName: "Thu",
      studentAccount: "Thu",
      phoneNumber: "0987654321",
      info: {
        fullName: "Vu Thi Bich Thu",
        phoneNumber: "0987654321",
        birthday: "01/01/2011",
        gender: "Female",
        email: "thu@gmail.com",
        address: "Quang Nam",
      },
    },
    {
      studentName: "An",
      studentAccount: "An",
      phoneNumber: "1234567890",
      info: {
        fullName: "Nguyen Thi Duy An",
        phoneNumber: "1234567890",
        birthday: "01/01/2011",
        gender: "Female",
        email: "an@gmail.com",
        address: "Quang Nam",
      },
    },
  ];

  return (
    <StyledStudentManagement>
      <div className="table-admin">
        <Table hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Student Name</th>
              <th>Student Account</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students &&
              students.map((item, index) => {
                return (
                  <tr
                    onClick={() => {
                      setShow(true);
                      setStudentSelected(item.info);
                    }}
                  >
                    <td>{index + 1}</td>
                    <td>{item.studentName}</td>
                    <td>{item.studentAccount}</td>
                    <td>{item.phoneNumber}</td>
                    <td>
                      <Button
                        color={btnStatus === "false" ? "danger" : "success"}
                        id="btn1"
                        onClick={() => {
                          setBtnStatus("true");
                          setBtnText("Blocked");
                        }}
                      >
                        {btnText}
                      </Button>{" "}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
      <Modal
        className="fade_popup centered "
        show={show}
        onHide={() => setShow(false)}
        data={studentSelected}
      >
        <ModalTitle className="lb">INFORMATION</ModalTitle>
        <ModalBody>
          {" "}
          <StyledGeneralInfo>
            <Form className="form-info">
              <div className="form__item">
                <div className="form__item__inner">
                  <Label>Full name</Label>
                  <FGroup
                    propsInput={{
                      name: "fullName",
                      value: studentSelected && studentSelected.fullName,
                      disabled: true,
                    }}
                  />
                </div>
              </div>

              <div className="form__item">
                <div className="form__item__inner">
                  <Label>Phone Number</Label>
                  <FGroup
                    propsInput={{
                      name: "phoneNumber",
                      value: studentSelected && studentSelected.phoneNumber,
                      disabled: true,
                    }}
                  />
                </div>
              </div>
              <div className="form__item">
                <div className="form__item__inner">
                  <Label>Birthday</Label>
                  <FGroup
                    propsInput={{
                      name: "birthday",
                      value: studentSelected && studentSelected.birthday,
                      disabled: true,
                    }}
                  />
                </div>
              </div>

              <div className="form__item">
                <div className="form__item__inner">
                  <Label>Gender</Label>
                  <FGroup
                    propsInput={{
                      name: "gender",
                      value: studentSelected && studentSelected.gender,
                      disabled: true,
                    }}
                  />
                </div>
              </div>
              <div className="form__item">
                <div className="form__item__inner">
                  <Label>Email</Label>
                  <FGroup
                    propsInput={{
                      name: "email",
                      value: studentSelected && studentSelected.email,
                      disabled: true,
                    }}
                  />
                </div>
              </div>

              <div className="form__item">
                <div className="form__item__inner">
                  <Label>Address</Label>
                  <FGroup
                    propsInput={{
                      name: "address",
                      value: studentSelected && studentSelected.address,
                      disabled: true,
                    }}
                  />
                </div>
              </div>
            </Form>
          </StyledGeneralInfo>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </StyledStudentManagement>
  );
};

export default StudentManagement;
