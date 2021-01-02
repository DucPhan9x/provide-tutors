import React from "react";
import { FormBox } from "../common";
import { Form as ReForm } from "reactstrap";
import { isEmpty } from "validator";
import { useSelector } from "react-redux";

const Form = ({ handleSubmit }) => {
  const [error, setError] = React.useState({});
  const [form, setForm] = React.useState({
    password: "",
    newPassword: "",
  });

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const errorState = validate();

    if (Object.keys(errorState).length > 0) {
      return setError(errorState);
    }

    const formData = {
      password: form.password,
      newPassword: form.newPassword,
    };

    handleSubmit(formData);
  };
  const storeResetPassword = useSelector((store) => store.resetPassword);
  const loading = storeResetPassword.loading;

  const validate = () => {
    const errorState = {};
    // check validate
    if (isEmpty(form.password)) {
      errorState.password = "Password is required";
    }
    if (isEmpty(form.newPassword)) {
      errorState.newPassword = "New password is required";
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
              name: "password",
              placeholder: "Password",
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
              name: "newPassword",
              placeholder: "New password",
              onChange: handleChange,
              onFocus: handleFocus,
              value: form.newPassword,
              disabled: false,
            }}
            error={error.newPassword}
          />
          <button disabled={loading} className="button button--secondary">
            Reset password
          </button>
        </ReForm>
      </div>
    </section>
  );
};

export default Form;
