import React from "react";
import styled from "styled-components";
import "./TutorCardPopup.css";

import { Button } from "reactstrap";

const StyledPopup = styled.section`
  .popup {
    position: fixed;
    width: 100%;
    height: 0%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .popup_inner {
    flex: 1;
    max-height: 100%;
    position: absolute;
    top: 2%;
    bottom: 10%;
    margin: auto;
    padding-left: 20px;
    padding-right: 25px;
    border-radius: 20px;
    background: white;
  }
  .list-days {
    margin-top: 5px;
    display: flex;
  }
  .warning {
    color: red !important;
  }
  input {
    text-rendering: "";
  }
`;

const TutorCardPopup = (props) => {
  return (
    <StyledPopup>
      <div className="popup">
        <br></br>
        <h2> Tutor Name </h2>
        <Button color="secondary">CANCEL</Button>{" "}
        <Button type="submit" color="primary">
          FINISH
        </Button>{" "}
      </div>
    </StyledPopup>
  );
};

export default TutorCardPopup;
