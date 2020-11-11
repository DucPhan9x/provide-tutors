import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__inner__logo">
          <img src={logo} alt="" />
          <p className="margin-t-s">© ProvideTutor, Inc. 2020</p>
        </div>
        <div className="footer__inner__links">
          <div className="footer__inner__links__item">
            <p className="text--xlarge underline underline--secondary margin-b">
              learn more
            </p>
            <ul>
              <li>
                <NavLink activeClassName="--active" exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="--active" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="--active" to="/how-it-works">
                  How it works
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="--active" to="/teachers">
                  Our teachers
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__inner__links__item">
            <p className="text--xlarge underline underline--primary margin-b">
              support
            </p>
            <ul>
              <li>
                <NavLink activeClassName="--active" to="/faq">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="--active" to="/contact-us">
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="--active" to="/articles">
                  Articles
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__inner__links__item">
            <p className="text--xlarge underline underline--blue margin-b">
              teach with us
            </p>
            <ul>
              <li>
                <NavLink activeClassName="--active" to="/teach-with-us">
                  Teach on ProvideTutor
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__inner__links__item">
            <p className="text--xlarge underline underline--secondary margin-b">
              legal
            </p>
            <ul>
              <li>
                <NavLink activeClassName="--active" to="/terms">
                  Terms
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="--active" to="/privacy">
                  Privacy
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__inner__links__item follow-us">
            <p className="text--xlarge underline underline--primary margin-b">
              Follow us
            </p>
            <ul>
              <li>
                <a href="https://twitter.com/providetutors">
                  <span className="icon-twitter"></span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Provide-tutors-100101211925466">
                  <span className="icon-facebook"></span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/providetutors">
                  <span className="icon-instagram"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
