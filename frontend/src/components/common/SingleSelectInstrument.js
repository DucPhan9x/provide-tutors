import React from "react";
import styled from "styled-components";
import Select from "react-select";

const StyledSingleSelectInstrument = styled(Select)`
  && {
    margin-bottom: 1%;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
    .react-single-select__indicators {
      display: none;
    }
    > div {
      border-radius: 8px;
      border-color: #d7d9e1;
      input {
        height: 30px !important;
      }
      .react-single-select__value-container {
        margin: 0px 0px 0 4px;
        padding: 5px 0;
      }
      .react-single-select__placeholder {
        color: rgba(8, 36, 135, 0.6);
        font-size: 16px;
        padding: 0 0 0 10px;
      }
      .react-single-select__single-value {
        color: #ffffff;
        padding: 9px 10px;
        border-radius: 23px;
        background: #7e72f2;
        text-align: center;
        width: 100%;
        font-size: 16px;
      }
      @media only screen and (max-width: 500px) {
        .react-single-select__placeholder,
        .react-single-select__option {
          font-size: 14px;
        }
        .react-single-select__single-value {
          font-size: 14px !important;
          padding: 6px 10px;
        }
        input {
          height: 24px !important;
        }
      }
    }
    .react-single-select__menu {
      overflow: hidden !important;
      z-index: 999;
    }
    .react-single-select__option {
      color: rgba(8, 36, 135, 0.6);
      font-size: 16px;
      text-align: left;
      padding-left: 16px;
    }
    @media only screen and (max-width: 1100px) {
      width: 100%;
    }
  }
`;

function SingleSelectInstrument(props) {
  return (
    <StyledSingleSelectInstrument
      className="react-single-select-container"
      classNamePrefix="react-single-select"
      {...props}
    />
  );
}

export default SingleSelectInstrument;
