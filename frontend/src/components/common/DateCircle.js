import React, { Component } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "reactstrap";

const StyledDateCircle = styled.section`
  .circle {
    width: 50px;
    height: 50px;
    padding: 7px 10px;
    border-radius: 25px;
    font-size: 15px;
    text-align: center;
  }
  .day {
    margin-top: 7px;
    margin-left: 7px;
    margin-right: 10px;
  }
  .checked {
    background-color: orange;
    color: white;
  }
`;
class DateCircle extends Component {
  render() {
    const { name, isChecked, onClick } = this.props;
    let className = "circle";
    if (isChecked) {
      className += " checked";
    }
    return (
      <StyledDateCircle>
        <div className="day">
          <Button
            className={className}
            outline
            color="warning"
            onClick={onClick}
          >
            {name}
          </Button>{" "}
        </div>
      </StyledDateCircle>
    );
  }
}

export default DateCircle;
