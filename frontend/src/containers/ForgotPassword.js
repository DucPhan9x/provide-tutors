import React from "react";
import { Form } from "../components/forgotPassword";
import { forgotPassword } from "../redux/actions/forgotPassword";
import { useHistory } from "react-router-dom";

function ForgotPassword() {
  const history = useHistory();
  const handleForgotPassword = (formData) => {
    forgotPassword(formData, (data) => {
      if (data.status === 200) {
        alert("Send mail successfully");
        history.push({
          pathname: "/confirm-password",
          state: { email: formData.email },
        });
      } else {
        alert(data.msg);
      }
    });
  };
  return <Form handleSubmit={handleForgotPassword} />;
}

export default ForgotPassword;
