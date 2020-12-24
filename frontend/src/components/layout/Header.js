import React from "react";
// import classNames from "classnames";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { getAuth } from "../../utils/helpers";
import DropdownUserMenu from "../common/DropdownUserMenu";

function Header() {
  const auth = getAuth();
  const isAdmin = auth && auth.role === "admin";
  const isStudent = auth && auth.role === 0;
  const isTutor = auth && auth.role === 1;
  const renderMenu = () => {
    if (isAdmin) {
      return (
        <>
          <NavLink activeClassName="--active" to="/admin/dashboard" exact>
            <span>Management</span>
          </NavLink>
          <DropdownUserMenu />
        </>
      );
    } else {
      if (isStudent) {
        return (
          <>
            <NavLink activeClassName="--active" to="/student" exact>
              <span>My home</span>
            </NavLink>
            <NavLink activeClassName="--active" to="/student/profile">
              <span>Profile</span>
            </NavLink>
            <DropdownUserMenu />
          </>
        );
      } else {
        if (isTutor) {
          return (
            <>
              <NavLink activeClassName="--active" to="/tutor" exact>
                <span>My home</span>
              </NavLink>
              <NavLink activeClassName="--active" to="/tutor/profile">
                <span>Profile</span>
              </NavLink>
              <NavLink activeClassName="--active" to="/tutor/mystudent">
                <span>My Student</span>
              </NavLink>
              <DropdownUserMenu auth={auth} />
            </>
          );
        }
      }
    }
  };
  return (
    <div className="header">
      <div className="header__inner flex items-center space-between">
        {auth && auth.role !== "admin" && (
          <NavLink to="/" className="header__inner__logo">
            <img src={logo} alt="Logo" />
          </NavLink>
        )}

        <div className="header__inner__menu flex items-center">
          {auth && auth.role !== "admin" && (
            <NavLink activeClassName="--active" to="/" exact>
              <span>Home page</span>
            </NavLink>
          )}
          {auth && auth.role !== "admin" && (
            <NavLink activeClassName="--active" to="/our-tutors">
              <span>Tutors available</span>
            </NavLink>
          )}
          {auth && auth.role !== "admin" && (
            <NavLink activeClassName="--active" to="/about-us">
              <span>About</span>
            </NavLink>
          )}

          {auth && auth.token ? (
            renderMenu()
          ) : (
            <NavLink
              to="/login"
              className="button button--primary button--login"
            >
              <span>Login</span>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
