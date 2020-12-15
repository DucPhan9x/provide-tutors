import React from "react";
import { Form } from "../components/login";
import { loginAdmin } from "../redux/actions/loginAdmin";
import { useHistory } from "react-router-dom";
import { setAuth } from "../utils/helpers";

const LogInAdmin = () => {
  const history = useHistory();
  const handleLogin = (formData) => {
    loginAdmin(formData, (data) => {
      if (data.status === 200) {
        setAuth(data.user);
        history.push("/admin/dashboard");
      } else {
        alert(data.msg);
      }
    });
  };

  return <Form handleSubmit={handleLogin} />;
};

export default LogInAdmin;
