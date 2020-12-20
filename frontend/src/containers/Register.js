import React from "react";
import { Form } from "../components/register";
import { register } from "../redux/actions/register";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  const handleRegister = (formData) => {
    console.log(formData);
    register(formData, (data) => {
      if (data.status === 200) {
        alert("Register successfully");
        history.push("/login");
      } else {
        alert(data.msg);
      }
    });
  };

  return <Form handleSubmit={handleRegister} />;
}

export default Register;
