import React from "react";
import { Form } from "../components/login";
import { login } from "../redux/actions/login";
import { useHistory } from "react-router-dom";
import { setAuth } from "../utils/helpers";
import { ROLE_STUDENT, ROLE_TUTOR } from "../utils/constants";

const LogIn = () => {
  const history = useHistory();
  const handleLogin = (formData) => {
    login(formData, (data) => {
      if (data.status === 200) {
        setAuth(data.user);
        if (data.user.role === ROLE_TUTOR) {
          history.push("/tutor");
        } else if (data.user.role === ROLE_STUDENT) {
          history.push("/student");
        } else {
          history.push("/");
        }
      } else {
        alert(data.msg);
      }
    });
  };

  return <Form handleSubmit={handleLogin} />;
};

export default LogIn;
