import React, { useState } from "react";
import styled from "styled-components";
import { ButtonDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { NavLink, useLocation } from "react-router-dom";
import { SignInAlt, ChevronDown, User } from "../common/icons";
import defaultAvatar from "../../assets/images/avatar-picture.svg";

const StyledDropdownUserMenu = styled(ButtonDropdown)`
  &&& {
    & > .btn {
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 0;
      &:focus,
      &:active {
        outline: none !important;
        box-shadow: none !important;
        background: transparent !important;
      }
      .avatar {
        width: 50px;
        border-radius: 100%;
      }
      svg {
        color: #08135a;
        margin: 0 0 0 12px;
        transition: 0.3s ease;
      }
    }
    @media only screen and (max-width: 899px) {
      & > .btn {
        display: none;
      }
    }

    .dropdown-menu {
      left: auto;
      right: 0;
      box-shadow: 0px 1px 8px 0px #c5c5c5;
      border: 0;
      min-width: 9rem;
      position: inherit;
      display: none;
      a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        padding: 8px 16px !important;
        p {
          margin: 0;
        }
        svg {
          margin: 5px 8px 5px 0;
          width: 22px;
        }
      }
    }
  }
`;

const DropdownUserMenu = ({
  isHasDashboardTutorLink,
  isHasDashboardStudentLink,
  isStudentAndTutor,
}) => {
  const location = useLocation();
  const [dropdownOpen, setOpen] = useState(false);

  const isInDashboardTutor = location.pathname.includes("/dashboard/tutor");
  const isInDashboardStudent = location.pathname.includes("/dashboard/student");

  const toggle = () => setOpen(!dropdownOpen);

  const renderNavLinks = () => {
    if (isStudentAndTutor) {
      return (
        <>
          {!isInDashboardStudent && (
            <NavLink to="/dashboard/student" activeClassName="--active">
              <User />
              <p>Dashboard Student</p>
            </NavLink>
          )}
          {!isInDashboardTutor && (
            <NavLink to="/dashboard/tutor" activeClassName="--active">
              <User />
              <p>Dashboard Tutor</p>
            </NavLink>
          )}
        </>
      );
    } else if (isHasDashboardTutorLink) {
      return (
        <>
          <NavLink to="/dashboard/tutor" activeClassName="--active">
            <User />
            <p>Dashboard</p>
          </NavLink>
        </>
      );
    } else if (isHasDashboardStudentLink) {
      return (
        <>
          <NavLink to="/dashboard/tutor" activeClassName="--active">
            <User />
            <p>Dashboard</p>
          </NavLink>
        </>
      );
    }
  };

  return (
    <StyledDropdownUserMenu isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle>
        {/* <img src={avatar || defaultAvatar} alt="Avatar" className="avatar" /> */}
        <img src={defaultAvatar} alt="Avatar" className="avatar" />
        <ChevronDown />
      </DropdownToggle>

      <DropdownMenu>
        {renderNavLinks()}
        <NavLink to="/dashboard">
          <p>Dashboard</p>
        </NavLink>
        <NavLink to="/logout">
          <SignInAlt />
          <p>Logout</p>
        </NavLink>
      </DropdownMenu>
    </StyledDropdownUserMenu>
  );
};

export default DropdownUserMenu;
