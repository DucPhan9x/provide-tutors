import React, { useState } from "react";
import styled from "styled-components";

import { Table, Button, Form, Label, Input, FormGroup } from "reactstrap";
import { DateCircle } from "../../../common";

import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

const StyledSchedule = styled.section`
  margin: 0 0 auto;
  .schedule__inner {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5%;
    margin-top: 25px;
  }
  .schedule-item {
    background: #ffffff;
    box-shadow: 0px 5px 25px rgba(98, 84, 232, 0.2);
    border-radius: 4px;
    padding: 20px 30px;
  }

  .class-schedule {
    width: 100%;
    padding: 20px 24px;
    height: 100%;
    .title {
      font-size: 24pt;
    }
    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
      button {
        color: #f6732f;
        font-size: 12px;
        border: none;
        background: transparent;
        p {
          border-bottom: 1px solid;
        }
        &:hover p {
          color: #08135a;
        }
      }
    }
  }
  .btn-add {
    margin: -25px auto;
    width: 50px;
    height: 50px;
    background: blue;
    border-radius: 50%;
    cursor: pointer;
    i {
      color: white;
    }
  }
`;

const StyledAddPopup = styled.section`

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
    .list-days {
      margin-top: 5px;
      display: flex;
    }

`;

const Schedule = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  // const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  const [listDays, setListDays] = useState([
    {
      day: "Mon",
      isChecked: false,
    },
    {
      day: "Tue",
      isChecked: false,
    },
    {
      day: "Wed",
      isChecked: false,
    },
    {
      day: "Thu",
      isChecked: false,
    },
    {
      day: "Fri",
      isChecked: false,
    },
    {
      day: "Sat",
      isChecked: false,
    },
    {
      day: "Sun",
      isChecked: false,
    },
  ]);

  const arrLessons = [
    {
      id: "1",
      time: "7:00 - 9:00, Mon &  Wed",
      price: "500.000VND",
      subject: "English",
      grade: "8",
    },
    {
      id: "2",
      time: "15:00 - 17:00, Mon &  Wed",
      price: "600.000VND",
      subject: "Math",
      grade: "12",
    },
  ];

  const changeStatusDay = (index) => {
    const updateListDay = { ...listDays[index] };
    updateListDay.isChecked = !listDays[index].isChecked;

    const updateListDays = [...listDays];
    updateListDays[index] = updateListDay;
    setListDays(updateListDays);
  };

  const getSubject = (subject) => {
    setSubject(subject);
  };

  const getGrade = (grade) => {
    setGrade(grade);
  };

  // const getDay = (day) => {
  //   setDay(day);
  // };
  const getTime = (time) => {
    setTime(time);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const scheduleInformation = {
      subject,
      grade,
      // day,
      time,
    };

    console.log(scheduleInformation);
  };
  return (
    <StyledSchedule>
      <div className="container">
        <div className="schedule__inner">
          <div className="class-schedule schedule-item">
            <div className="class-schedule__header">
              <p className="title">My lessons</p>
            </div>
            <div>
              <br />
              <Table hover>
                <thead style={{ color: "purple", fontWeight: "bold" }}>
                  <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Grade</th>
                    <th>Time</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {arrLessons.map((item, index) => {
                    return (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.subject}</td>
                        <td>{item.grade}</td>
                        <td>{item.time}</td>
                        <td>{item.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div
          className="btn-add flex items-center j-center"
          onClick={handleShow}
        >
          <i className="icon-plus-circle" />
        </div>
        <Modal
          className="fade_popup centered_addpopup "
          show={show}
          onHide={handleClose}
        >
          <ModalTitle className="lb">ADD SCHEDULE</ModalTitle>
          <ModalBody>
            {" "}
            <StyledAddPopup>
              <Form className="form-info">
                <div className="form__item">
                  <div className="form__item__inner">
                    <Label>Subject</Label>
                    <Input
                      type="select"
                      name="selectSubject"
                      onChange={(event) => getSubject(event.target.value)}
                    >
                      <option>Select a subject</option>
                      <option>Maths</option>
                      <option>Literature</option>
                      <option>English</option>
                      <option>Chemistry</option>
                      <option>Physics</option>
                      <option>Biology</option>
                    </Input>
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__inner">
                    <Label>Grade</Label>
                    <Input
                      type="select"
                      name="selectGrade"
                      onChange={(event) => getGrade(event.target.value)}
                    >
                      <option>Select grade</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </Input>
                  </div>
                </div>
                <FormGroup>
                  {" "}
                  <Label>
                    <b>Day</b>
                  </Label>{" "}
                  <div className="list-days">
                    {listDays.map((item, index) => (
                      <DateCircle
                        key={index}
                        name={item.day}
                        isChecked={item.isChecked}
                        onClick={() => changeStatusDay(index)}
                      ></DateCircle>
                    ))}
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label>Time</Label>
                  <Input
                    type="select"
                    name="selectTime"
                    onChange={(event) => getTime(event.target.value)}
                  >
                    <option>Select time</option>
                    <option>7:00 - 9:00</option>
                    <option>9:00 - 11:00</option>
                    <option>13:00 - 15:00</option>
                    <option>15:00 - 17:00</option>
                    <option>17:00 - 19:00</option>
                    <option>19:00 - 21:00</option>
                  </Input>
                </FormGroup>
              </Form>
            </StyledAddPopup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>
              Add
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </StyledSchedule>
  );
};

export default Schedule;
