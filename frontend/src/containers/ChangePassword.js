import React from "react";
import { Form } from "../components/changePassword";
import { changePassword } from "../redux/actions/changePassword";
import { useHistory } from "react-router-dom";

function ChangePassword() {
  const history = useHistory();
  const handleChangePassword = (formData) => {
    changePassword(formData, (data) => {
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
