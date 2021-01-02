import React from "react";
import { Form } from "../components/resetPassword";

function ResetPassword() {
  const handleResetPassword = (formData) => {
    console.log(formData);
  };
  return <Form handleSubmit={handleResetPassword} />;
}

export default ResetPassword;
