import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../components/login";
import { login, updateRememberedPath } from "../redux/actions/login";
import { useHistory } from "react-router-dom";
import { setAuth } from "../utils/helpers";
import { ROLE_STUDENT, ROLE_TUTOR } from "../utils/constants";

const LogIn = () => {
  const history = useHistory();
  const storeLogin = useSelector((store) => store.login);
  const handleLogin = (formData) => {
    login(formData, (data) => {
      setAuth(data.user.token);
      if (data.user.role === ROLE_TUTOR) {
        history.push("/dashboard/tutor");
      } else if (data.user.role === ROLE_STUDENT) {
        history.push("/dashboard/student");
      } else {
        history.push("/");
      }
    });
  };

  return <Form handleSubmit={handleLogin} />;
};

export default LogIn;
