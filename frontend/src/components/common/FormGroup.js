import React from "react";
import { FormGroup as ReFormGroup, FormFeedback, Input } from "reactstrap";
import MutiSelect from "./MutiSelect";
import SingleSelect from "./SingleSelect";
import SingleSelectInstrument from "./SingleSelectInstrument";
import styled from "styled-components";

const StyledFormFeedback = styled(FormFeedback)`
  && {
    padding: 0 25px;
    display: ${({ error }) => (error ? "block" : "none")};
    font-size: 12px;
  }
`;

const StyledFormGroup = styled(ReFormGroup)`
  &&& {
    .react-select__control,
    .react-single-select__control {
      ${({ error }) => (error ? "border-color: #dc3545 !important;" : "")}
    }
  }
`;

function FormGroup({
  propsFormGroup = {},
  propsInput = {},
  error = "",
  showErrorMessage = true,
  variant = "Input",
  type = "",
  className = "",
  label = "",
}) {
  return (
    <StyledFormGroup error={error} {...propsFormGroup}>
      {variant === "Input" && <Input invalid={!!error} {...propsInput} />}
      {variant === "MutiSelect" && <MutiSelect {...propsInput} />}
      {variant === "SingleSelect" && <SingleSelect {...propsInput} />}
      {variant === "SingleSelectInstrument" && (
        <SingleSelectInstrument {...propsInput} />
      )}
      {type === "checkbox" && <span className="checkmark" />}
      {showErrorMessage && (
        <StyledFormFeedback error={error}>{error}</StyledFormFeedback>
      )}
    </StyledFormGroup>
  );
}

export default FormGroup;
