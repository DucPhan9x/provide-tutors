import React from "react";
import styled from "styled-components";
import { Avatar } from "../common";

const StyledDashboardProfileLayout = styled.section`
  margin-bottom: auto;
  .teachers__card__footer {
    display: none;
  }
  .DashboardProfileLayout__inner {
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
      display: block;
      align-items: center;
      border: none;
      background: #ffff;
      display: flex;
      flex-direction: column;
      .avatar {
        align: center;
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
          display: flex;
        }
      }
      h4 {
        margin: 7px 0;
        text-transform: capitalize;
        text-align: center;
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
      display: block;
      & > div:first-child {
        height: 100%;
        width: 100%;
        max-width: 450px;
        margin: 20px auto;
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
        color: #b5beec;
        &:hover,
        &.--active {
          color: #6254e8;
          p {
            border-bottom: 2px solid #6254e8;
          }
        }
        p {
          border-bottom: 2px solid transparent;
          margin: 0;
          padding-bottom: 13px;
          transform: translateY(2px);
        }

        svg {
          font-size: 22px;
          margin-bottom: 10px;
          display: none;
        }
        @media only screen and (max-width: 745px) {
          svg {
            display: initial;
          }
          .menu__icon {
            padding: 6px 15px 0px;
          }
          p {
            display: none;
          }
        }
      }
    }
  }
`;

const DashboardProfileStudentLayout = ({
  children,
  onOpenModalUpdateAvatar,
}) => {
  return (
    <StyledDashboardProfileLayout>
      <div className="container">
        <div className="DashboardProfileLayout__inner">
          <div className="card">
            <div className="avatar">
              <Avatar />
            </div>
            <h4>Thu Vu</h4>
          </div>
          {children}
        </div>
      </div>
    </StyledDashboardProfileLayout>
  );
};

export default DashboardProfileStudentLayout;
