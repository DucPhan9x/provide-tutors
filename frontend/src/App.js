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
import { HomeTutor, ProfileTutor } from "./containers/dashboard/tutors";
import withLayoutDashboard from "./HOCS/withLayoutDashboard";
import { HomeStudent, ProfileStudent } from "./containers/dashboard/students";
import { HomeAdmin } from "./containers/dashboard/admin";

function App() {
  return (
    <Router>
      <Switch>
        {/* Dashboard tutor */}
        <Route
          path="/dashboard/tutor"
          // component={withAuth(withLayoutDashboard(HomeTutor), [
          component={withLayoutDashboard(HomeTutor)}
          exact
        />
        <Route
          path="/dashboard/tutor/profile"
          // component={withAuth(withLayoutDashboard(HomeTutor), [
          component={withLayoutDashboard(ProfileTutor)}
          exact
        />
        {/* Dashboard student */}
        <Route
          path="/dashboard/student"
          // component={withAuth(withLayoutDashboard(HomeTutor), [
          component={withLayoutDashboard(HomeStudent)}
          exact
        />
        <Route
          path="/dashboard/student/profile"
          // component={withAuth(withLayoutDashboard(HomeTutor), [
          component={withLayoutDashboard(ProfileStudent)}
          exact
        />
        {/* Dashboard admin */}
        <Route
          path="/dashboard/admin"
          component={withLayoutDashboard(HomeAdmin)}
          exact
        />

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
        <Route path="/our-tutors" exact component={withLayout(OurTutors)} />
        <Route path="/about-us" exact component={withLayout(AboutUs)} />
        <Route path="/register" exact component={withLayout(Register)} />
        {/* Homepage */}
        <Route path="/" component={withLayout(HomePage)} />
      </Switch>
    </Router>
  );
}

export default App;
