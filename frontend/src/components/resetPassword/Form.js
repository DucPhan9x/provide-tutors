import React from "react";
import { FormBox } from "../common";
import { Form as ReForm } from "reactstrap";
import { isEmpty } from "validator";

const Form = ({ handleSubmit }) => {
  const [error, setError] = React.useState({});
  const [form, setForm] = React.useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const errorState = validate();

    if (Object.keys(errorState).length > 0) {
      return setError(errorState);
    }

    const formData = {
      code: "",
      login: "",
      new_password: form.newPassword,
    };

    handleSubmit(formData);
  };

  const validate = () => {
    const errorState = {};
    // check validate
    if (isEmpty(form.newPassword)) {
      errorState.newPassword = "New password is required";
    }
    if (isEmpty(form.confirmNewPassword)) {
      errorState.confirmNewPassword = "Confirm password is required";
    } else if (form.confirmNewPassword !== form.newPassword) {
      errorState.confirmNewPassword = "Confirm password is wrong";
    }
    return errorState;
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleFocus = (event) => {
    setError({
      ...error,
      [event.target.name]: "",
    });
  };

  return (
    <section onSubmit={handleSubmitForm} className="reset-password">
      <div className="reset-password__inner">
        <ReForm className="radius-l reset-password__inner__form">
          <div className="reset-password__inner__form__text">
            <p className="fw-600">Reset your password</p>
          </div>
          <FormBox
            propsInput={{
              type: "password",
              name: "newPassword",
              placeholder: "New password",
              onChange: handleChange,
              onFocus: handleFocus,
              value: form.newPassword,
              disabled: false,
            }}
            error={error.newPassword}
          />
          <FormBox
            propsInput={{
              type: "password",
              name: "confirmNewPassword",
              placeholder: "Confirm new password",
              onChange: handleChange,
              onFocus: handleFocus,
              value: form.confirmNewPassword,
              disabled: false,
            }}
            error={error.confirmNewPassword}
          />
          <button disabled={false} className="button button--secondary">
            Reset password
          </button>
        </ReForm>
      </div>
    </section>
  );
};

export default Form;
