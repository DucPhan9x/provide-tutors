import React from "react";
import styled from "styled-components";
import { FormGroup, Form, Label, Input } from "reactstrap";
import { FGroup } from "../../../common";
import save from "../../../../assets/images/save.svg";

const StyledGeneralInfo = styled.section`
  .form-info {
    padding: 30px 20px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .form__item {
      float: left;
      width: 40%;
      text-align: left;
    }
    label {
      margin-left: 10px;
      font-size: 12px;
      font-weight: 600;
    }
    .date-of-birth {
      width: calc(100% - 20px);
      margin: 0 10px;
      > div:before {
        border-bottom: 1px solid #ced4da;
      }
      input {
        padding: 8px;
        border: 1px solid #ced4da;
        border-bottom: none;
        border-radius: 4px;
        font-size: 12px;
      }
      .Mui-disabled {
        background-color: #e9ecef;
        color: #495057;
      }
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
    @media only screen and (max-width: 1190px) {
      .form__item {
        width: 50%;
      }
    }
    @media only screen and (max-width: 615px) {
      .form__item {
        width: 100%;
      }
    }
    @media only screen and (max-width: 370px) {
      padding: 30px 10px 10px;
      label {
        font-size: 11px;
      }
      .form-group {
        input {
          font-size: 10px;
        }
      }
    }
  }
  .wrap-button {
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    overflow: hidden;
  }
  .find {
    border: none;
    padding: 3px 8px 3px 20px;
    font-size: 12px;
    color: #ffffff;
    line-height: 34px;
    font-weight: 500;
    transition: 0.3s ease;
    background: #54c052;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 8px 0 #2d972b;
    }
    &[disabled] {
      background: #717272;
      pointer-events: none;
      span {
        background: #4d4d4d;
      }
    }
    span {
      padding: 7px 7px;
      border-radius: 100%;
      margin-left: 5px;
      background: #2d972b;
      display: inline-flex;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

const GeneralInfo = () => {
  const student = {
    fullName: "Vu Thi Bich Thu",
    phoneNumber: "01213456789",
    email: "vuthibichthu@gmail.com",
    address: "Quang Nam",
  };
  return (
    <StyledGeneralInfo>
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
            <Label>Phone number</Label>
            <FGroup
              propsInput={{
                name: "phoneNumber",
                value: student.phoneNumber,
              }}
            />
          </div>
        </div>
        <div className="form__item">
          <div className="form__item__inner">
            <FormGroup>
              <Label for="birthday">Birthday</Label>
              <Input
                type="date"
                name="birthday"
                id="birthday"
                placeholder="date placeholder"
              />
            </FormGroup>
          </div>
        </div>

        <div className="form__item">
          <div className="form__item__inner">
            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input type="select" name="select" id="gender">
                <option>Female</option>
                <option>Male</option>
              </Input>
            </FormGroup>
          </div>
        </div>
        <div className="form__item">
          <div className="form__item__inner">
            <Label>Email address</Label>
            <FGroup
              propsInput={{
                name: "email",
                value: student.email,
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
                value: student.address,
              }}
            />
          </div>
        </div>

        <div className="wrap-button">
          <button className="find">
            Save my changes
            <span>
              <img src={save} alt="save" />
            </span>
          </button>
        </div>
      </Form>
    </StyledGeneralInfo>
  );
};

export default GeneralInfo;
