import React from "react";
import { FormBox } from "../common";
import { Form as ReForm } from "reactstrap";
import { isEmpty, isEmail } from "validator";
import { OPTIONS_ROLE, OPTIONS_GENDER } from "../../utils/constants";
import SingleSelect from "../common/SingleSelect";
import { useSelector } from "react-redux";

const Form = ({ handleSubmit }) => {
  const [error, setError] = React.useState({});
  const [form, setForm] = React.useState({
    userName: "",
    email: "",
    password: "",
    confirmPass: "",
    role: null,
    fullName: "",
    male: null,
    phone: "",
    birthday: "",
    address: "",
  });
  const [role, setRole] = React.useState(null);
  const [male, setMale] = React.useState(null);

  const [errorRegister, setErrorRegister] = React.useState();
  const onChangeRole = (data) => {
    data.label === "Student" ? setRole("0") : setRole("1");
  };
  const onChangeGender = (data) => {
    setMale(data.label);
  };
  const loading = useSelector((store) => store.register.loading);

  const validate = () => {
    const errorState = {};
    // check validate
    if (isEmpty(form.userName)) {
      errorState.userName = "Invalid user name";
    }
    if (isEmpty(form.fullName)) {
      errorState.fullName = "Please enter full name";
    }
    if (isEmpty(form.address)) {
      errorState.address = "Please enter address";
    }
    if (isEmpty(form.phone)) {
      errorState.phone = "Please enter number phone";
    }
    if (isEmpty(form.birthday)) {
      errorState.birthday = "Please enter birthday";
    }
    if (!isEmail(form.email)) {
      errorState.email = "Invalid email";
    }
    if (isEmpty(form.password)) {
      errorState.password = "Invalid password";
    }
    if (isEmpty(form.confirmPass) || form.password !== form.confirmPass) {
      errorState.confirmPass = "Invalid confirm password";
    }
    if (!role) {
      errorState.role = "Please select role";
    }
    if (!male) {
      errorState.male = "Please select gender";
    }
    return errorState;
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const errorState = validate();
    if (Object.keys(errorState).length > 0) {
      return setError(errorState);
    }
    const formData = {
      userName: form.userName,
      email: form.email,
      password: form.password,
      role: role,
      male: male,
      fullName: form.fullName,
      birthday: form.birthday,
      phone: form.phone,
      address: form.address,
    };
    console.log(form.birthday);
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
              name: "fullName",
              placeholder: "FullName",
              onChange: handleChange,
              onFocus: handleFocus,
              value: form.fullName,
              disabled: false,
            }}
            error={error.fullName}
          />
          <FormBox
            propsInput={{
              name: "phone",
              placeholder: "Number phone",
              onChange: handleChange,
              onFocus: handleFocus,
              value: form.phone,
              disabled: false,
            }}
            error={error.phone}
          />
          <FormBox
            propsInput={{
              type: "date",
              name: "birthday",
              placeholder: "Birthday",
              value: form.birthday,
              onChange: handleChange,
              disabled: false,
            }}
            error={error.birthday}
          />
          <FormBox
            propsInput={{
              name: "address",
              placeholder: "Address",
              onChange: handleChange,
              onFocus: handleFocus,
              value: form.address,
              disabled: false,
            }}
            error={error.address}
          />
          <div style={{ marginBottom: 15 }}>
            <SingleSelect
              name="male"
              placeholder="Gender"
              onChange={onChangeGender}
              options={OPTIONS_GENDER}
              isDisabled={false}
            />
            {!male && (
              <span style={{ color: "red", fontSize: 13 }}>{error.male}</span>
            )}
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
            // value={form.role}
            options={OPTIONS_ROLE}
            isDisabled={false}
          />
          {!role && (
            <span style={{ color: "red", fontSize: 13 }}>{error.role}</span>
          )}

          <button
            disabled={loading}
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
