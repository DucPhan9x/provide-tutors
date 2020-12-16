import React from "react";
import { Modal as ReModal } from "reactstrap";
import styled from "styled-components";

const StyledModal = styled(ReModal)`
  -webkit-overflow-scrolling: touch;
  > * {
    -webkit-transform: translateZ(0px);
  }
`;

let PREV_IS_OPEN = {};

function Modal(props) {
  const resetAfterCloseOrUnmountModal = React.useCallback(() => {
    PREV_IS_OPEN[props.id] = false;
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    const y = parseInt(scrollY.replace("px", "") || 0) * -1;
    window.scrollTo(0, y);
  }, [props.id]);

  React.useEffect(() => {
    return () => {
      resetAfterCloseOrUnmountModal();
    };
  }, [resetAfterCloseOrUnmountModal]);

  if (PREV_IS_OPEN[props.id] !== props.isOpen) {
    if (props.isOpen) {
      PREV_IS_OPEN[props.id] = true;
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
    } else {
      resetAfterCloseOrUnmountModal();
    }
  }

  return <StyledModal {...props} />;
}

export default Modal;
