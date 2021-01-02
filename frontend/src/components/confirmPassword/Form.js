import React from "react";
import { FormBox } from "../common";
import { Form as ReForm } from "reactstrap";
import { useSelector } from "react-redux";

const Form = ({ handleSubmit, email }) => {
  const [error, setError] = React.useState({});
  const [form, setForm] = React.useState({ email: "", code: "" });
  const [errorForgotPassword, setErrorForgotPassword] = React.useState();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const errorState = validate();

    if (Object.keys(errorState).length > 0) {
      return setError(errorState);
    }

    const formData = {
      email: email,
      code: form.code,
    };

    handleSubmit(formData);
  };
  const loading = useSelector((store) => store.confirmPassword.loading);

  const validate = () => {
    const errorState = {};
    // check validate
    if (!form.code) {
      errorState.code = "Empty code";
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
            <h3>Confirm forgot password?</h3>
            <p>Please enter your authentication code!</p>
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
              value: form.code,
              disabled: false,
            }}
            error={error.code}
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
