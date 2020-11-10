import React from "react";
import styled from "styled-components";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const StyledMutiSelect = styled(Select)`
  && {
    margin-bottom: 1%;
    select::placeholder {
      color: rgba(8, 36, 135, 0.6);
    }
    .react-select__control {
      border-radius: 8px;
      padding: 1px;
      min-height: 50px;
      border-color: #d7d9e1;
      input {
        height: 36px !important;
      }
      .react-select__value-container {
        padding: 0 3px;
      }
      .react-select__placeholder {
        color: #1f1e26;
        font-size: 16px;
        padding-left: 19px;
      }
      .react-select__indicator-separator {
        display: none;
      }
      .react-select__indicator {
        path {
          fill: #1f1e26;
        }
      }
      @media only screen and (max-width: 780px) {
        .react-select__placeholder,
        .react-select__option,
        .react-select__menu h3 {
          font-size: 14px;
          line-height: 16px;
        }
        .react-select__multi-value {
          &__label {
            font-size: 14px !important;
            line-height: 16px;
          }
        }
      }
      @media only screen and (max-width: 500px) {
        min-height: 44px .react-select__placeholder, .react-select__option,
          .react-select__menu h3 {
          font-size: 13px;
        }
        .react-select__multi-value {
          &__label {
            font-size: 13px !important;
            padding: 4px 10px !important;
          }
        }

        input {
          height: 30px !important;
        }
      }
      .react-select__multi-value {
        border-radius: 14px;
        background: #7e72f2;
        color: #c8c3fd;
        padding: 4px 28px 4px 16px;
        text-align: center;
        position: relative;
        line-height: 26px;
        margin: 3px 10px 3px 0;
        @media only screen and (max-width: 500px) {
          padding-left: 7px;
        }
        &__label {
          color: #ffffff;
          font-size: 16px;
          padding: 3px;
        }
        svg {
          height: 22px;
          width: 22px;
        }
        .react-select__multi-value__remove {
          transition: 0.3s ease;
          position: absolute;
          right: 5px;
          top: calc(50% - 11px);
          padding: 0;
          cursor: pointer;
          &:hover {
            background-color: transparent;
            color: #ffffff;
            transform: scale(1.25);
          }
        }
        @media only screen and (max-width: 780px) {
          svg {
            height: 20px;
            width: 20px;
          }
        }
      }
      @media only screen and (max-width: 500px) {
        min-height: 44px;
      }
    }
    .react-select__menu {
      overflow: hidden !important;
      h3 {
        color: rgba(8, 36, 135, 0.6);
        font-size: 16px;
        font-weight: 400;
      }
    }
    .react-select__option {
      color: #1F1E26
      font-size: 16px;
      text-align: left;
      padding-left: 25px;
    }
  }
`;

const animatedComponents = makeAnimated();
function MutiSelect(props) {
  return (
    <StyledMutiSelect
      isMulti
      components={animatedComponents}
      className="react-select-container"
      classNamePrefix="react-select"
      noOptionsMessage={() => <h3>Instrument not available</h3>}
      {...props}
    />
  );
}

export default MutiSelect;
