import React, { useState } from "react";
import styled from "styled-components";

import { addSchedule } from "../../../../redux/actions/addSchedule";

import { Table, Button, Form, Label, Input } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import { useSelector } from "react-redux";

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
    .price-input{
      width:100%;
      display: flex;
      justify-content: center;
      margin-top: 20px;
      .money-input{
        display: block;
        margin-left: 20px;
        width: 30%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }
    .form__item {
      float: left;
      width: 50%;
      text-align: left;
      margin-bottom: 10px;
      margin-top: 10px;
      padding-right: 10px;
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
  const [price, setPrice] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  const loading = useSelector((store) => store.addSchedule.loading);

  const subjectOptions = [
    {
      label: "Maths",
      value: "Maths",
    },
    {
      label: "Literature",
      value: "Literature",
    },
    {
      label: "English",
      value: "English",
    },
    {
      label: "Physics",
      value: "Physics",
    },
    {
      label: "Chemistry",
      value: "Chemistry",
    },
    {
      label: "Biology",
      value: "Biology",
    },
  ];
  const gradeOptions = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
    {
      label: "5",
      value: "5",
    },
    {
      label: "6",
      value: "6",
    },
    {
      label: "7",
      value: "7",
    },
    {
      label: "8",
      value: "8",
    },
    {
      label: "9",
      value: "9",
    },
    {
      label: "10",
      value: "10",
    },
    {
      label: "11",
      value: "11",
    },
    {
      label: "12",
      value: "12",
    },
  ];

  const dayOptions = [
    {
      label: "Mon",
      value: "Mon",
    },
    {
      label: "Tue",
      value: "Tue",
    },
    {
      label: "Wed",
      value: "Wed",
    },
    {
      label: "Thu",
      value: "Thu",
    },
    {
      label: "Fri",
      value: "Fri",
    },
    {
      label: "Sat",
      value: "Sat",
    },
    {
      label: "Sun",
      value: "Sun",
    },
  ];
  const timeOptions = [
    {
      label: "7:00 - 9:00",
      value: "7:00 - 9:00",
    },
    {
      label: "9:00 - 11:00",
      value: "9:00 - 11:00",
    },
    {
      label: "13:00 - 15:00",
      value: "13:00 - 15:00",
    },
    {
      label: "15:00 - 17:00",
      value: "15:00 - 17:00",
    },
    {
      label: "17:00 - 19:00",
      value: "17:00 - 19:00",
    },
    {
      label: "19:00 - 21:00",
      value: "19:00 - 21:00",
    },
  ];

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

  const [timeday, setTimeDay] = useState([]);

  const getSubject = (subject) => {
    setSubject(subject);
  };

  const getGrade = (grade) => {
    setGrade(grade);
  };
  const getPrice = (price) => {
    setPrice(price);
  };

  const getDay = (day) => {
    setDay(day);
    console.log(day);
  };
  const getTime = (time) => {
    setTime(time);
    console.log(time);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let time = [];
    timeday.forEach((item) => {
      time.push(item.selectedDay + ", " + item.selectedTime);
    });

    const scheduleInformation = {
      subject,
      grade,
      time,
      price,
    };
    addSchedule(scheduleInformation, (data) => {
      if (data.status === 200) {
        setShow(false);
        alert(data.msg);
      } else {
        alert(data.msg);
      }
    });
  };

  const handleAddTimeDay = (time, day) => {
    let newTimeDay = { selectedTime: time, selectedDay: day };
    setTimeDay((timeday) => [...timeday, newTimeDay]);
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
                      {subjectOptions.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
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
                      {gradeOptions.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </Input>
                  </div>
                </div>
                <div className="price-input">
                  <label for="quantity">Price (Money/Lesson): </label>
                  <input
                    className="money-input"
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="50000"
                    max="200000"
                    step="50000"
                    placeholder="Price (VNĐ)"
                    onChange={(event) => getPrice(event.target.value)}
                  ></input>
                </div>
                <div className="form__item">
                  <div className="form__item__inner">
                    <Label>Day</Label>
                    <Input
                      type="select"
                      name="selectSubject"
                      onChange={(event) => getDay(event.target.value)}
                    >
                      <option>Select day</option>
                      {dayOptions.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </Input>
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__inner">
                    <Label>Time</Label>
                    <Input
                      type="select"
                      name="selectGrade"
                      onChange={(event) => getTime(event.target.value)}
                    >
                      <option>Select time</option>
                      {timeOptions.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </Input>
                  </div>
                </div>
                <Button
                  color="secondary"
                  onClick={() => handleAddTimeDay(day, time)}
                >
                  Add day & time
                </Button>
              </Form>

              <Table hover>
                <thead style={{ color: "purple", fontWeight: "bold" }}>
                  <tr>
                    <th>#</th>
                    <th>Day</th>
                    <th>Time</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {timeday.length > 0 &&
                    timeday.map((item) => {
                      return (
                        <tr>
                          <th scope="row">{item.id}</th>
                          <td>{item.selectedDay}</td>
                          <td>{item.selectedTime}</td>
                          <td>
                            <Button close />
                          </td>
                        </tr>
                      );
                    })}
                  {}
                </tbody>
              </Table>
            </StyledAddPopup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" disabled={loading} onClick={handleSubmit}>
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
