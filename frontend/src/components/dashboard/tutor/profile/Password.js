import React from "react";
import styled from "styled-components";
import { Form, Label } from "reactstrap";
import { FGroup } from "../../../common";
import save from "../../../../assets/images/save.svg";

import { changePassword } from "../../../../redux/actions/changePassword";

const StyledPassword = styled.section`
  .form-info {
    padding: 30px 20px 10px;
    .form__item {
      width: 100%;
      text-align: left;
      max-width: 340px;
    }
    label {
      margin-left: 10px;
      font-size: 12px;
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

const Password = () => {
  const [form, setForm] = React.useState({
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const formData = {
      password: form.currentPassword,
      newPassword: form.newPassword,
    };
    console.log(formData);

    changePassword(formData, (data) => {
      if (data.status === 200) {
        alert(data.msg);
      } else {
        alert(data.msg);
      }
    });
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <StyledPassword>
      <Form
        className="form-info  flex items-center flex-col"
        onSubmit={handleSubmitForm}
      >
        <div className="form__item">
          <div className="form__item__inner">
            <Label>Current password</Label>
            <FGroup
              propsInput={{
                name: "currentPassword",
                type: "password",
                placeholder: "Enter your current password here…",
                value: form.currentPassword,
                onChange: handleChange,
              }}
            />
          </div>
        </div>
        <div className="form__item">
          <div className="form__item__inner">
            <Label>New password</Label>
            <FGroup
              propsInput={{
                name: "newPassword",
                type: "password",
                placeholder: "Enter your new password here…",
                value: form.newPassword,
                onChange: handleChange,
              }}
            />
          </div>
        </div>
        <div className="form__item">
          <div className="form__item__inner">
            <Label>New password (confirm)</Label>
            <FGroup
              propsInput={{
                name: "newPasswordConfirm",
                type: "password",
                placeholder: "Confirm your new password here…",
                value: form.newPasswordConfirm,
                onChange: handleChange,
              }}
            />
          </div>
        </div>
        <button className="find">
          Save
          <span>
            <img src={save} alt="save" />
          </span>
        </button>
      </Form>
    </StyledPassword>
  );
};

export default Password;
