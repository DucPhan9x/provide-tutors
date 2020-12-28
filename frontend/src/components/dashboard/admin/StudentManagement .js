import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Table, Button, Form, Label } from "reactstrap";
import { FGroup } from "../../common/";

import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

import { useSelector } from "react-redux";
import { getStudentUsers } from "../../../redux/actions/getStudentUsers";
import { removeStudent } from "../../../redux/actions/removeStudent";

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
  const [show, setShow] = useState(false);
  const [studentSelected, setStudentSelected] = useState(null);
  useEffect(() => {
    getStudentUsers();
  }, []);

  const students = useSelector(
    (store) => store.getStudentUsers.data.listStudent
  );

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
                    <td>{item.fullName}</td>
                    <td>{item.userName}</td>
                    <td>{item.phone}</td>
                    <td>
                      <Button
                        color={"danger"}
                        id="btn1"
                        onClick={() => {
                          removeStudent(item._id, (data) => {
                            if (data.status === 200) {
                              alert("Remove succeed!");
                            } else {
                              alert("Remove failed, " + data.msg);
                            }
                          });
                        }}
                      >
                        Remove
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
