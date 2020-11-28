import React from "react";
import styled from "styled-components";
import { Table } from "reactstrap";

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

const Schedule = () => {
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
        <div className="btn-add flex items-center j-center">
          <i className="icon-plus-circle" />
        </div>
      </div>
    </StyledSchedule>
  );
};

export default Schedule;
