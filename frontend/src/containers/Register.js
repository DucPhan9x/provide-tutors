import React from "react";
import { Form } from "../components/register";

function Register() {
  const handleRegister = (formData) => {
    console.log("data: ", formData);
  };

  return <Form handleSubmit={handleRegister} />;
}

export default Register;
