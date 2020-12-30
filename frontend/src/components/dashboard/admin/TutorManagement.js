import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Table, Button, Form } from "reactstrap";

import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

import { useSelector } from "react-redux";
import { getTutorUsers } from "../../../redux/actions/getTutorUsers";
import { removeTutor } from "../../../redux/actions/removeTutor";

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
  const [show, setShow] = useState(false);
  const [tutorSelected, setTutorSelected] = useState(null);
  const [tutors, setTutors] = useState([]);
  const storeTutor = useSelector((store) => store.getTutorUsers);

  useEffect(() => {
    getTutorUsers();
  }, []);

  useEffect(() => {
    if (!storeTutor.data) {
      return;
    }
    setTutors(storeTutor.data.listTutor);
  }, [storeTutor]);

  const [tutorId, setTutorId] = useState("");

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
                      setTutorSelected(item);
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
                          setTutorId(item._id);
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
        data={tutorSelected}
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
              const arrTutor = tutors.filter((tutor) => {
                return tutor._id !== tutorId;
              });
              setTutors(arrTutor);
              removeTutor(tutorId, (data) => {
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
    </StyledTutorManagement>
  );
};

export default TutorManagement;
