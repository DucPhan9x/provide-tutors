import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { ChevronRight, Edit } from "../../../common/icons";
import { Form, Label } from "reactstrap";
import { FGroup } from "../../../common";
import save from "../../../../assets/images/save.svg";

const StyledStudent = styled.section`
  margin-bottom: auto;
  .mystudent__inner__text {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 25px 10px;
    .text-color {
      color: #6254e8;
      font-weight: 500;
    }
    .arrow {
      margin: 0 15px;
      font-size: 12px;
      svg {
        font-size: 12px;
      }
    }
    a {
      color: #082487;
      :hover {
        color: #6254e8;
      }
    }
    p {
      margin: 0;
      text-transform: capitalize;
    }
    @media only screen and (max-width: 500px) {
      font-size: 14px;
      .arrow {
        margin: 0 10px;
        svg {
          width: 8px;
        }
      }
    }
  }
  .Student__inner {
    display: flex;
    justify-content: space-between;
    > div {
      box-shadow: 0px 5px 25px rgba(98, 84, 232, 0.203944);
      border-radius: 4px;
    }
    .card {
      height: 100%;
      width: 30%;
      margin: 16px 15px 16px 10px;
      padding: 20px;
      display: flex;
      align-items: center;
      border: none;
      .avatar {
        width: fit-content;
        border-radius: 100%;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        img {
          width: 180px;
          height: 180px;
        }
        .--bg {
          position: absolute;
          background: rgba(8, 19, 90, 0.8);
          width: 100%;
          height: 100%;
          top: 0;
          border-radius: 100%;
          transition: 0.3s ease;
          opacity: 0;
        }
        &:hover .--bg {
          opacity: 1;
        }
        .avatar__update {
          position: absolute;
          top: 40%;
          left: 33%;
          font-size: 16px;
          color: #ffffff;
          display: none;
        }
        &:hover .avatar__update {
          display: block;
        }
      }
      }
      h4 {
        margin: 7px 0;
        text-transform: capitalize;
      }
      .location {
        font-size: 14px;
        color: #b5beec;
        text-transform: capitalize;
      }
    }
    .profile-userInfo {
      width: 68%;
      height: 100%;
      background: #ffffff;
      overflow: hidden;
      margin: 16px 10px;
      padding: 40px 0px 20px;
      font-size: 14px;
      @media only screen and (max-width: 1020px) {
        width: calc(100% - 32px);
        max-width: 900px;
        margin: 30px auto;
      }
      @media only screen and (max-width: 480px) {
        width: 100%;
      }
    }
    @media only screen and (max-width: 1020px) {
      .Student__inner {
        display: block;
        & > div:first-child {
          height: 100%;
          width: 100%;
          max-width: 450px;
          margin: 20px auto;
        }
      }
      
    }
    .menu {
      color: #b5beec;
      border-bottom: 2px solid #dce0f6;
      &__inner {
        display: flex;
        padding: 0 30px;
        > a {
          margin-right: 40px;
        }
        @media only screen and (max-width: 370px) {
          > a {
            margin-right: 20px;
          }
        }
      }
      &__userInfo {
        transition: 0.3s ease;
        cursor: pointer;
        color: #6254e8;
        p {
          border-bottom: 2px solid #6254e8;
          margin: 0;
          padding-bottom: 13px;
          transform: translateY(2px);
        }
      }
    }
  }
  .form-info {
    padding: 30px 20px 10px;
    display: flex;
    flex-wrap: wrap;
    .form__item {
      float: left;
      width: 40%;
      text-align: left;
    }
    label {
      margin-left: 10px;
      font-size: 12px;
      font-weight: 600;
    }
    .date-of-birth {
      width: calc(100% - 20px);
      margin: 0 10px;
      > div:before {
        border-bottom: 1px solid #ced4da;
      }
      input {
        padding: 8px;
        border: 1px solid #ced4da;
        border-bottom: none;
        border-radius: 4px;
        font-size: 12px;
      }
      .Mui-disabled {
        background-color: #e9ecef;
        color: #495057;
      }
    }
    .form-group {
      margin: 0 10px 20px 10px;
      input {
        min-height: 36px;
        border-radius: 4px;
        font-size: 12px;
        padding: 8px;
      }
    }
    @media only screen and (max-width: 1190px) {
      .form__item {
        width: 50%;
      }
    }
    @media only screen and (max-width: 615px) {
      .form__item {
        width: 100%;
      }
    }
    @media only screen and (max-width: 370px) {
      padding: 30px 10px 10px;
      label {
        font-size: 11px;
      }
      .form-group {
        input {
          font-size: 10px;
        }
      }
    }
  }
  .wrap-button {
    width: 100%;
    overflow: hidden;
  }
  .find {
    border: none;
    padding: 3px 8px 3px 20px;
    font-size: 12px;
    color: #ffffff;
    line-height: 34px;
    font-weight: 500;
    transition: 0.3s ease;
    background: #54c052;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 8px 0 #2d972b;
    }
    &[disabled] {
      background: #717272;
      pointer-events: none;
      span {
        background: #4d4d4d;
      }
    }
    span {
      padding: 7px 7px;
      border-radius: 100%;
      margin-left: 5px;
      background: #2d972b;
      display: inline-flex;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

const Student = () => {
  return (
    <StyledStudent>
      <div className="container">
        <div className="mystudent__inner__text">
          <Link to="/dashboard/student/profile">My profile</Link>
          <p className="arrow">
            <ChevronRight />
          </p>

         
        </div>
        <div className="Student__inner">
          <div className="card">
            <div className="avatar" >
              <img src="https://picsum.photos/200" alt="avatar" />
              <div className="--bg"></div>
              <div className="avatar__update">
                <Edit />
                <p>Update</p>
              </div>
            </div>
          
          </div>

          <div className="profile-userInfo">
            <div className="menu">
              <div className="menu__inner">
                <NavLink
                  className="menu__userInfo"
                  activeClassName="--active"
                  to="/dashboard/student/profile"
                  exact
                >
                  <p>General information</p>
                </NavLink>
              </div>
            </div>
            <div>
              <Form className="form-info" >
                <div className="form__item">
                  <div className="form__item__inner">
                    <Label>First name</Label>
                    <FGroup
                    
                    />
                  </div>
                </div>
                <div className="form__item">
                  <div className="form__item__inner">
                    <Label>Last name</Label>
                    <FGroup
                    
                    />
                  </div>
                </div>
                <div className="wrap-button">
                  <button className="find" >
                    Save my changes
                    <span>
                      <img src={save} alt="save" />
                    </span>
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </StyledStudent>
  );
};

export default Student;
