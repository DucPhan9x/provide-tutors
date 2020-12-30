import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Table, Button, Form } from "reactstrap";

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
  const [students, setStudents] = useState([]);

  const storeStudent = useSelector((store) => store.getStudentUsers);

  useEffect(() => {
    getStudentUsers();
  }, []);

  useEffect(() => {
    if (!storeStudent.data) {
      return;
    }
    setStudents(storeStudent.data.listStudent);
  }, [storeStudent]);

  const [studentId, setStudentId] = useState("");

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
                      setStudentSelected(item);
                    }}
                  >
                    <td>{index + 1}</td>
                    <td>{item.fullName}</td>
                    <td>{item.userName}</td>
                    <td>{item.phone}</td>
                    <td>
                      <Button
                        color={"danger"}
                        onClick={() => {
                          setStudentId(item._id);
                          setShow(true);
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
        className="fade_popup confirm-centered "
        show={show}
        onHide={() => setShow(false)}
        data={studentSelected}
      >
        <ModalTitle className="lb">CONFIRM</ModalTitle>
        <ModalBody>
          {" "}
          <StyledGeneralInfo>
            <Form className="form-info">
              <label>Are you sure? </label>
            </Form>
          </StyledGeneralInfo>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setShow(false)}>
            No
          </Button>
          <Button
            color="primary"
            onClick={() => {
              const arrStudent = students.filter((student) => {
                return student._id !== studentId;
              });
              setStudents(arrStudent);
              removeStudent(studentId, (data) => {
                if (data.status === 200) {
                  alert("Remove succeed!");
                }
              });
              setShow(false);
            }}
          >
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </StyledStudentManagement>
  );
};

export default StudentManagement;
