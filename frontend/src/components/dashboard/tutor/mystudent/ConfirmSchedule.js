import React, { useState } from "react";
import styled from "styled-components";
import { Table, Button, Form, Label } from "reactstrap";
import { FGroup } from "../../../common";

import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

const StyledSchedule = styled.section`

  margin: 0 100px auto;
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
    .title{
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
    &__date {
      display: flex;
      width: 100%;
      max-width: 350px;
      margin-bottom: 20px;
    }
    &__body {
      height: 370px;
      overflow: auto;
      .class-schedule__item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      .reschedule {
        background: #f6732f;
      }
      .time-and-information {
        display: flex;
        justify-content: space-between;
        width: 87%;
      }
      .time {
        width: 14%;
        background: #f2f4fd;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5px;
        text-shadow: 0px 0px #082487;
        p {
          margin: 0;
        }
        .day {
          font-size: 18px;
          margin-bottom: 0;
          text-transform: uppercase;
        }
        .month {
          font-size: 10px;
          margin: -8px 0 0;
          span {
            font-size: 18px;
            margin: 0 0 0 4px;
            position: relative;
            bottom: -1px;
            text-shadow: 0px 0px #082487;
          }
        }
      }
      .information {
        background: #f2f4fd;
        width: 84%;
        display: flex;
        justify-content: space-between;
        padding: 8px;
        border-radius: 4px;
        div:first-child {
          display: flex;
          align-items: center;
          img {
            max-width: 48px;
            max-height: 48px;
            border-radius: 100%;
          }
        }
        .camera_and_dot {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 40px;
            height: 40px;
            transition: 0.3s ease;
            &:hover {
              transform: scale(1.2);
            }
          }
        }
        .dot {
          display: flex;
          cursor: pointer;
          padding: 10px;
          align-items: center;
          color: #b5beec;
          &:hover {
            color: #f6732f;
          }
        }
        &__item {
          text-align: left;
          margin-left: 10px;
          p {
            font-size: 14px;
            margin-bottom: 0px;
            font-weight: 600;
            text-transform: capitalize;
            line-height: 18px;
            margin: 6px 0 0;
          }
          .--hour {
            display: flex;
            align-items: center;
            h4 {
              font-size: 14px;
              margin: 0;
            }
            span {
              margin: 0px 4px 6px;
              line-height: 20px;
            }
            p {
              font-weight: 400;
              margin: 0;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .schedule-item {
      width: calc(50% - 12.5px);
    }
    .class-schedule__item {
      flex-direction: column;
    }
    .class-schedule__body {
      .time-and-information {
        width: 100%;
      }
      .information {
        width: 86%;
      }
      .time {
        width: 16%;
        > div {
          border-right: 2px solid #e0e3ec;
        }
        .day {
          font-size: 14px;
        }
        .month {
          font-size: 9px;
          span {
            font-size: 16px;
          }
        }
      }
      .information__item {
        p,
        .--hour h4 {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
  }
  @media only screen and (max-width: 800px) {
    .schedule-item {
      padding: 20px 15px;
    }
  }
  @media only screen and (max-width: 765px) {
    .schedule__inner {
      display: block;
    }
    .schedule-item {
      width: 100%;
      margin-bottom: 30px;
    }
  }
  @media only screen and (max-width: 500px) {
    .class-schedule__date {
      display: block;
      max-width: 150px;
      > div {
        margin-bottom: 10px;
      }
      .--border {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 435px) {
    .class-schedule__body {
      .time {
        width: 20%;
        .day {
          font-size: 12px;
        }
      }
      .information {
        width: 80%;
        div:first-child img {
          max-width: 40px;
          max-height: 40px;
        }
        .dot {
          padding: 5px;
        }
        .camera_and_dot img {
          width: 30px;
          height: 30px;
        }
      }
      .information__item {
        .--hour {
          h4,
          p {
            font-size: 10px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .class-schedule,
    .lesson-schedule {
      padding: 20px 10px;
    }
    .lesson-schedule__header {
      flex-direction: column;
      button {
        margin: 0 auto;
      }
    }
    .lesson-schedule__body {
      .today-date {
        left: inherit;
        right: 2px;
        top: -20px;
        font-size: 16px;
      }
    }
    .lesson-schedule__footer {
      font-size: 9px;
    }
  }

  .--list-lessons {
    height: 450px;
    .list-lessons__header {
      display: flex;
      padding: 10px 0;
      p {
        margin: 0;
      }
      span {
        background: hsl(0, 0%, 80%);
        width: calc(100% - 160px);
        height: 2px;
        margin: auto 0px auto 20px;
      }
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

const ConfirmSchedule = () => {
  const [show, setShow] = useState(false);
  const [studentSelected, setStudentSelected] = useState(null);

  const arrStudents = [
    {
      id: "1",
      time: "7:00 - 9:00, Tue & Thur",
      name: "Thu Vu",
      subject: "Physics",
      grade: "8",
      inf: {
        fullName: "Vu Thi Bich Thu",
        birthday: "01/01/2011",
        gender: "Female",
        address: "Quang Nam",
      },
    },
    {
      id: "2",
      time: "13:00 - 15:00, Mon & Fri",
      name: "Trong Duc",
      subject: "English",
      grade: "9",
      inf: {
        fullName: "Phan Trong Duc",
        birthday: "03/03/2033",
        gender: "Male",
        address: "Quang Nam",
      },
    },
    {
      id: "3",
      time: "20:00 - 21:00, Wed & Sun",
      name: "Trung Nam",
      subject: "Biology",
      grade: "7",
      inf: {
        fullName: "Nguyen Trung Nam",
        birthday: "01/01/2011",
        gender: "Female",
        address: "Quang Nam",
      },
    },
  ];

  return (
    <StyledSchedule>
      <div className="container">
        <div className="schedule__inner">
          <div className="class-schedule schedule-item">
            <div className="class-schedule__header">
              <p className="title">My student registered</p>
            </div>
            <div>
              <br></br>
              <div className="lessons">All students</div>
              <Table hover>
                <thead style={{ color: "purple", fontWeight: "bold" }}>
                  <tr>
                    <th>#</th>
                    <th>Student</th>
                    <th>Subject</th>
                    <th>Grade</th>
                    <th>Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {arrStudents.map((item, index) => {
                    return (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <div>
                            {item.name}
                            <Button
                              color="info"
                              style={{
                                width: "50%",
                                outline: "none",
                                margin: 20,
                              }}
                              onClick={() => {
                                setShow(true);
                                setStudentSelected(item.inf);
                              }}
                            >
                              See detail
                            </Button>
                          </div>
                        </td>
                        <td>{item.subject}</td>
                        <td>{item.grade}</td>
                        <td>{item.time}</td>
                        <td>
                          <Button color="warning" style={{ outline: "none" }}>
                            Accept
                          </Button>
                          <Button
                            color="warning"
                            style={{
                              outline: "none",
                              background: "red",
                              marginLeft: 10,
                            }}
                          >
                            Remove
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
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
    </StyledSchedule>
  );
};

export default ConfirmSchedule;
