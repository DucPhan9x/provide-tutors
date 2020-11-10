import React from "react";
// import classNames from "classnames";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Header({ showHeader }) {
  // const handleClick = () => {};
  return (
    <div className="header">
      <div className="header__inner flex items-center space-between">
        <NavLink to="/" className="header__inner__logo">
          <img src={logo} alt="Logo" />
        </NavLink>
        <div className="header__inner__menu">
          <NavLink activeClassName="--active" to="/" exact>
            <span>Home</span>
          </NavLink>
          <NavLink activeClassName="--active" to="/teachers">
            <span>My teachers</span>
          </NavLink>
          <NavLink activeClassName="--active" to="/about">
            <span>About us</span>
          </NavLink>
          <NavLink to="/login" className="button button--primary button--login">
            <span>Login</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
