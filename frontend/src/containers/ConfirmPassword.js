import React from "react";
import { Form } from "../components/confirmPassword";
import { confirmPassword } from "../redux/actions/confirmPassword";
import { useHistory } from "react-router-dom";

function ConfirmPassword() {
  const history = useHistory();
  const handleConfirmPassword = (formData) => {
    confirmPassword(formData, (data) => {
      if (data.status === 200) {
        alert("Confirm password successfully");
        history.push({
          pathname: "/change-password",
          state: { email: formData.email, code: formData.code },
        });
      } else {
        alert(data.msg);
      }
    });
  };
  return (
    <Form
      handleSubmit={handleConfirmPassword}
      email={history.location.state && history.location.state.email}
    />
  );
}

export default ConfirmPassword;
