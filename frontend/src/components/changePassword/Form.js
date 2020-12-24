import React from "react";
import { FormBox } from "../common";
import { Form as ReForm } from "reactstrap";
import { useSelector } from "react-redux";
import { isEmpty } from "validator";

const Form = ({ handleSubmit, email, code }) => {
  const [error, setError] = React.useState({});
  const [form, setForm] = React.useState({
    email: "",
    code: "",
    password: "",
    confirmPass: "",
  });
  const [errorForgotPassword, setErrorForgotPassword] = React.useState();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const errorState = validate();

    if (Object.keys(errorState).length > 0) {
      return setError(errorState);
    }

    const formData = {
      email: email,
      code: code,
      password: form.password,
    };

    handleSubmit(formData);
  };
  const loading = useSelector((store) => store.changePassword.loading);

  const validate = () => {
    const errorState = {};
    if (isEmpty(form.password)) {
      errorState.password = "Empty password";
    }
    if (isEmpty(form.confirmPass) || form.password !== form.confirmPass) {
      errorState.confirmPass = "Invalid confirm password";
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
    setErrorForgotPassword("");
  };

  return (
    <section onSubmit={handleSubmitForm} className="forgot-password">
      <div className="forgot-password__inner">
        <ReForm className="radius-l forgot-password__inner__form">
          <div className="forgot-password__inner__form__text">
            <h3>Change your password?</h3>
            <p>Please enter your new password!</p>
          </div>
          <div className="error_forgot-password">{errorForgotPassword}</div>
          <FormBox
            propsInput={{
              name: "email",
              placeholder: "Email",
              onChange: handleChange,
              onFocus: handleFocus,
              value: email,
              disabled: true,
            }}
          />
          <FormBox
            propsInput={{
              name: "code",
              placeholder: "Authentication code",
              onChange: handleChange,
              onFocus: handleFocus,
              value: code,
              disabled: true,
            }}
          />
          <FormBox
            propsInput={{
              type: "password",
              name: "password",
              placeholder: "New password",
              onChange: handleChange,
              onFocus: handleFocus,
              value: form.password,
              disabled: false,
            }}
            error={error.password}
          />
          <FormBox
            propsInput={{
              type: "password",
              name: "confirmPass",
              placeholder: "Confirm password",
              onChange: handleChange,
              onFocus: handleFocus,
              value: form.confirmPass,
              disabled: false,
            }}
            error={error.confirmPass}
          />
          <button disabled={loading} className="button button--secondary">
            Confirm
          </button>
        </ReForm>
      </div>
    </section>
  );
};

export default Form;
