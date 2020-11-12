import React from "react";
import styled from "styled-components";
import Select from "react-select";

const StyledSingleSelect = styled(Select)`
  && {
    margin-bottom: 1%;
    .react-single-select__control {
      border-radius: 8px;
      border-color: #d7d9e1;
      &--is-focused {
        box-shadow: none;
      }
    }
    @media screen and (max-width: 500px) {
      width: 100%;
    }
    > div {
      input {
        height: 30px !important;
      }
      .react-single-select__value-container {
        padding: 5px 16px;
      }
      .react-single-select__placeholder {
        color: #1f1e26;
        font-size: 16px;
      }
      .react-single-select__single-value {
        font-size: 16px;
        text-transform: capitalize;
      }
      .react-single-select__indicator-separator {
        display: none;
      }
      .react-single-select__indicator path {
        fill: #1f1e26;
      }
      @media only screen and (max-width: 500px) {
        .react-single-select__placeholder,
        .react-single-select__option {
          font-size: 14px;
        }
        .react-single-select__single-value {
          font-size: 14px !important;
        }
        input {
          height: 24px !important;
        }
      }
    }
    .react-single-select__menu {
      overflow: hidden !important;
      z-index: 1;
    }
    .react-single-select__option {
      color: #1f1e26;
      font-size: 16px;
      text-align: left;
      padding-left: 16px;
      text-transform: capitalize;
    }
    @media only screen and (max-width: 1100px) {
      width: 100%;
    }
  }
`;

function SingleSelect(props) {
  return (
    <StyledSingleSelect
      className="react-single-select-container"
      classNamePrefix="react-single-select"
      {...props}
    />
  );
}

export default SingleSelect;
