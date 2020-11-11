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
  isHasDashboardTeacherLink,
  isHasDashboardParentLink,
  isParentAndTeacher,
}) => {
  const location = useLocation();
  const [dropdownOpen, setOpen] = useState(false);
  const [avatar, setAvatar] = useState(defaultAvatar);

  const isInDashboardTeacher = location.pathname.includes("/dashboard/teacher");
  const isInDashboardParent = location.pathname.includes("/dashboard/parent");

  const toggle = () => setOpen(!dropdownOpen);

  const renderNavLinks = () => {
    if (isParentAndTeacher) {
      return (
        <>
          {!isInDashboardParent && (
            <NavLink to="/dashboard/parent" activeClassName="--active">
              <User />
              <p>Dashboard Student</p>
            </NavLink>
          )}
          {!isInDashboardTeacher && (
            <NavLink to="/dashboard/teacher" activeClassName="--active">
              <User />
              <p>Dashboard Teacher</p>
            </NavLink>
          )}
        </>
      );
    } else if (isHasDashboardTeacherLink) {
      return (
        <>
          <NavLink to="/dashboard/teacher" activeClassName="--active">
            <User />
            <p>Dashboard</p>
          </NavLink>
        </>
      );
    } else if (isHasDashboardParentLink) {
      return (
        <>
          <NavLink to="/dashboard/parent" activeClassName="--active">
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
        <img src={avatar || defaultAvatar} alt="Avatar" className="avatar" />
        <ChevronDown />
      </DropdownToggle>

      <DropdownMenu>
        {renderNavLinks()}
        <NavLink to="/logout">
          <SignInAlt />
          <p>Logout</p>
        </NavLink>
      </DropdownMenu>
    </StyledDropdownUserMenu>
  );
};

export default DropdownUserMenu;
