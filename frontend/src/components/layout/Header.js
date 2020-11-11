import React from "react";
// import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import DropdownUserMenu from "../common/DropdownUserMenu";

function Header({ isDashboard, showHeader }) {
  // const handleClick = () => {};
  const location = useLocation();
  const isDashboardStudent = location.pathname.includes("/dashboard/student");
  const isDashboardTutor = location.pathname.includes("/dashboard/tutor");
  const renderMenu = () => {
    if (isDashboardStudent) {
      return (
        <>
          <NavLink activeClassName="--active" to="/dashboard/student" exact>
            <span>Home</span>
          </NavLink>
          <NavLink activeClassName="--active" to="/dashboard/student/profile">
            <span>Profile</span>
          </NavLink>
          <DropdownUserMenu
            isHasDashboardTutorLink={!isDashboard && isDashboardTutor}
            isHasDashboardStudentLink={!isDashboard && isDashboardStudent}
            isStudentAndTutor={isDashboardStudent && isDashboardTutor}
          />
        </>
      );
    }
    if (isDashboardTutor) {
      return (
        <>
          <NavLink activeClassName="--active" to="/dashboard/tutor" exact>
            <span>Home</span>
          </NavLink>
          <NavLink activeClassName="--active" to="/dashboard/tutor/profile">
            <span>Profile</span>
          </NavLink>
          <DropdownUserMenu
            isHasDashboardTutorLink={!isDashboard && isDashboardTutor}
            isHasDashboardStudentLink={!isDashboard && isDashboardStudent}
            isStudentAndTutor={isDashboardStudent && isDashboardTutor}
          />
        </>
      );
    }
    if (!isDashboardStudent && !isDashboardTutor) {
      return (
        <>
          <NavLink activeClassName="--active" to="/" exact>
            <span>Home</span>
          </NavLink>
          <NavLink activeClassName="--active" to="/our-tutors">
            <span>Our tutors</span>
          </NavLink>
          <NavLink activeClassName="--active" to="/about-us">
            <span>About us</span>
          </NavLink>
          <NavLink to="/login" className="button button--primary button--login">
            <span>Login</span>
          </NavLink>
        </>
      );
    }
  };
  return (
    <div className="header">
      <div className="header__inner flex items-center space-between">
        <NavLink to="/" className="header__inner__logo">
          <img src={logo} alt="Logo" />
        </NavLink>
        <div className="header__inner__menu flex items-center">
          {renderMenu()}
        </div>
      </div>
    </div>
  );
}

export default Header;
