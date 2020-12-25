import React, { useState } from "react";
import styled from "styled-components";
import { Table, Button, Form, Label } from "reactstrap";
import { FGroup } from "../../common/";

import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

const StyledTutorManagement = styled.section`
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

const TutorManagement = () => {
  const [btnStatus, setBtnStatus] = useState("false");
  const [btnText, setBtnText] = useState("Block");

  const [show, setShow] = useState(false);
  const [tutorSelected, setTutorSelected] = useState(null);

  const tutors = [
    {
      tutorName: "Thu",
      tutorAccount: "Thu",
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
      tutorName: "An",
      tutorAccount: "An",
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
    <StyledTutorManagement>
      <div className="table-admin">
        <Table hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Tutor Name</th>
              <th>Tutor Account</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tutors &&
              tutors.map((item, index) => {
                return (
                  <tr
                    onClick={() => {
                      setShow(true);
                      setTutorSelected(item.info);
                    }}
                  >
                    <td>{index + 1}</td>
                    <td>{item.tutorName}</td>
                    <td>{item.tutorAccount}</td>
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
        data={tutorSelected}
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
                      value: tutorSelected && tutorSelected.fullName,
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
                      value: tutorSelected && tutorSelected.phoneNumber,
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
                      value: tutorSelected && tutorSelected.birthday,
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
                      value: tutorSelected && tutorSelected.gender,
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
                      value: tutorSelected && tutorSelected.email,
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
                      value: tutorSelected && tutorSelected.address,
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
    </StyledTutorManagement>
  );
};

export default TutorManagement;
