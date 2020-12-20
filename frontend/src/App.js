import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import { withLayout } from "./HOCS";
import LogIn from "./containers/LogIn";
import ForgotPassword from "./containers/ForgotPassword";
import ResetPassword from "./containers/ResetPassword";
import Register from "./containers/Register";
import OurTutors from "./containers/OurTutors";
import AboutUs from "./containers/AboutUs";
import {
  HomeTutor,
  ProfileTutor,
  MyStudent,
} from "./containers/dashboard/tutors";
import withLayoutDashboard from "./HOCS/withLayoutDashboard";
import { HomeStudent, ProfileStudent } from "./containers/dashboard/students";
import { HomeAdmin } from "./containers/dashboard/admin";
import { getAuth } from "./utils/helpers";
import { useSelector } from "react-redux";
import Articles from "./containers/Articles";
import ContactUs from "./containers/ContactUs";
import Faq from "./containers/Faq";
import ConfirmPassword from "./containers/ConfirmPassword";
import ChangePassword from "./containers/ChangePassword";
import LogInAdmin from "./containers/LogInAdmin";

function App() {
  const storeLogin = useSelector((store) => store.login);
  const auth = storeLogin.data.user || getAuth();
  return (
    <Router>
      <Switch>
        {/*   Tutor */}
        {auth && auth.role === 1 && (
          <Route
            path="/tutor"
            component={withLayoutDashboard(HomeTutor)}
            exact
          />
        )}
        {auth && auth.role === 1 && (
          <Route
            path="/tutor/profile"
            component={withLayoutDashboard(ProfileTutor)}
            exact
          />
        )}
        {auth && auth.role === 1 && (
          <Route
            path="/tutor/mystudent"
            component={withLayoutDashboard(MyStudent)}
            exact
          />
        )}
        {/* Student */}
        {auth && auth.role === 0 && (
          <Route
            path="/student"
            component={withLayoutDashboard(HomeStudent)}
            exact
          />
        )}
        {auth && auth.role === 0 && (
          <Route
            path="/student/profile"
            component={withLayoutDashboard(ProfileStudent)}
            exact
          />
        )}

        {/* admin */}
        <Route path="/admin" component={LogInAdmin} exact />
        {/* login successfully */}
        {auth && auth.token && auth.role === "admin" && (
          <Route
            path="/admin/dashboard"
            component={withLayoutDashboard(HomeAdmin)}
            exact
          />
        )}

        <Route path="/login" exact component={withLayout(LogIn)} />
        <Route
          path="/forgot-password"
          exact
          component={withLayout(ForgotPassword)}
        />
        <Route
          path="/reset-password"
          exact
          component={withLayout(ResetPassword)}
        />
        <Route
          path="/confirm-password"
          exact
          component={withLayout(ConfirmPassword)}
        />
        <Route
          path="/change-password"
          exact
          component={withLayout(ChangePassword)}
        />
        <Route path="/our-tutors" exact component={withLayout(OurTutors)} />
        <Route path="/about-us" exact component={withLayout(AboutUs)} />
        <Route path="/register" exact component={withLayout(Register)} />
        <Route path="/faq" exact component={withLayout(Faq)} />
        <Route path="/contact-us" exact component={withLayout(ContactUs)} />
        <Route path="/articles" exact component={withLayout(Articles)} />
        {/* Homepage */}
        <Route path="/" component={withLayout(HomePage)} />
      </Switch>
    </Router>
  );
}

export default App;
