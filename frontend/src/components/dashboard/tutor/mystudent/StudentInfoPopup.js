import React from "react";
import styled from "styled-components";
import { Form, Label } from "reactstrap";
import { FGroup } from "../../../common";

const StyledGeneralInfo = styled.section`
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
}
.popup_inner {
  width: 500px;
  height: 250px;
  position: relative;

  max-height: 100%;
  margin-top:100px;
  top: 50%;
  left: 50%;
  bottom: 10%;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 25px;
  border-radius: 20px;
  background: white;
  transform: translate(-50%, -50%);
  .lb{
    font-size: 22px;
    display: flex;
    justify-content: center;
    color: #089453;
  }
}
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
const StudentInfoPopup = () => {
  const student = {
    fullName: "Vu Thi Bich Thu",
    birthday: "01/01/2011",
    gender: "Female",
    address: "Quang Nam",
  };
  return (
    <StyledGeneralInfo>
      <div className="popup">
        <div className="popup_inner">
          <Label className="lb">Information</Label>
          <Form className="form-info">
            <div className="form__item">
              <div className="form__item__inner">
                <Label>Full name</Label>
                <FGroup
                  propsInput={{
                    name: "fullName",
                    value: student.fullName,
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
                    value: student.gender,
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
                    value: student.birthday,
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
                    value: student.address,
                  }}
                />
              </div>
            </div>
          </Form>
        </div>
      </div>
    </StyledGeneralInfo>
  );
};

export default StudentInfoPopup;
