import React from "react";
import { FormBox } from "../common";
import { Form as ReForm } from "reactstrap";
import { isEmpty, isEmail } from "validator";
import { OPTIONS_ROLE } from "../../utils/constants";
import SingleSelect from "../common/SingleSelect";

const Form = ({ handleSubmit }) => {
  const [error, setError] = React.useState({});
  const [form, setForm] = React.useState({
    userName: "",
    email: "",
    password: "",
    confirmPass: "",
    role: 0,
  });
  const [errorRegister, setErrorRegister] = React.useState();
  const onChangeRole = (data) => {
    data.label === "Student" ? setForm({ role: 0 }) : setForm({ role: 1 });
  };

  const validate = () => {
    const errorState = {};
    // check validate
    if (isEmpty(form.userName)) {
      errorState.email = "Wrong user name";
    }
    if (!isEmail(form.email)) {
      errorState.email = "Wrong email";
    }
    if (isEmpty(form.password)) {
      errorState.password = "Wrong password";
    }
    if (isEmpty(form.confirmPass) || form.password !== form.confirmPass) {
      errorState.password = "Wrong confirm password";
    }
    if (isEmpty(form.roles)) {
      errorState.email = "Wrong role";
    }
    return errorState;
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();
    // const errorState = validate();
    // if (Object.keys(errorState).length > 0) {
    //   return setError(errorState);
    // }
    const formData = {
      userName: form.userName,
      email: form.email,
      password: form.password,
      confirmPass: form.confirmPass,
      role: form.role,
    };
    handleSubmit(formData);
  };
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value.trim() });
  };

  const handleFocus = (event) => {
    setError({
      ...error,
      [event.target.name]: "",
    });
    setErrorRegister("");
  };

  return (
    <section onSubmit={handleSubmitForm} className="register">
      <div className="register__inner">
        <ReForm className="radius-l register__inner__form">
          <div className="register__inner__form__text">
            <p>Register your account</p>
            <div className="error">{errorRegister}</div>
          </div>
          <FormBox
            propsInput={{
              name: "userName",
              placeholder: "User name",
              onChange: handleChange,
              onFocus: handleFocus,
              value: form.userName,
              disabled: false,
            }}
            error={error.userName}
          />
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
              name: "confirmPass",
              placeholder: "Confirm password",
              onChange: handleChange,
              onFocus: handleFocus,
              value: form.confirmPass,
              disabled: false,
            }}
            error={error.confirmPass}
          />
          <SingleSelect
            name="role"
            placeholder="Type user"
            onChange={onChangeRole}
            // value={} value duoc luu tru o redux de goi lai
            // value={form.role === 0 ? "Student" : "Tutor"}
            options={OPTIONS_ROLE}
            isDisabled={false}
          />
          <button
            disabled={false}
            className="button button--secondary button--register"
          >
            Register
          </button>
          <div className="flex space-between"></div>
        </ReForm>
      </div>
    </section>
  );
};

export default Form;
