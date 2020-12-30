import React from "react";
import { Form } from "../components/changePassword";
import { useHistory } from "react-router-dom";
import { resetPassword } from "../redux/actions/resetPassword";

function ChangePassword() {
  const history = useHistory();
  const handleChangePassword = (formData) => {
    resetPassword(formData, (data) => {
      if (data.status === 200) {
        alert("Change password successfully");
        history.push("/login");
      } else {
        alert(data.msg);
      }
    });
  };
  return (
    <Form
      handleSubmit={handleChangePassword}
      email={history.location.state && history.location.state.email}
      code={history.location.state && history.location.state.code}
    />
  );
}

export default ChangePassword;
