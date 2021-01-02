import React from "react";
import { FormBox } from "../common";
import { Form as ReForm } from "reactstrap";
import { isEmail } from "validator";
import { useSelector } from "react-redux";

const Form = ({ handleSubmit }) => {
  const loading = useSelector((store) => store.forgotPassword.loading);
  const [error, setError] = React.useState({});
  const [form, setForm] = React.useState({ email: "" });
  const [errorForgotPassword, setErrorForgotPassword] = React.useState();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const errorState = validate();

    if (Object.keys(errorState).length > 0) {
      return setError(errorState);
    }

    const formData = {
      email: form.email,
    };

    handleSubmit(formData);
  };

  const validate = () => {
    const errorState = {};
    // check validate
    if (!isEmail(form.email)) {
      errorState.email = "Wrong email";
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
            <h3>Forgot your password?</h3>
            <p>
              Please enter your email address to receive a password Forgot link
            </p>
          </div>
          <div className="error_forgot-password">{errorForgotPassword}</div>
          <FormBox
            propsInput={{
              name: "email",
              placeholder: "Email",
              onChange: handleChange,
              onFocus: handleFocus,
              value: form.email,
              disabled: false,
            }}
            error={error.email}
          />
          <button disabled={loading} className="button button--secondary">
            Send Email
          </button>
        </ReForm>
      </div>
    </section>
  );
};

export default Form;
