import React from "react";
import styled from "styled-components";

const StyledPassword = styled.section`
  .bg {
    background: #ffffff;
    .user_account {
      height: 500px;
      margin-left: 10px;
    }
  }
`;

const UserAccount = () => {
  return (
    <StyledPassword>
      <div className="bg">
        <div className="user_account">Comming soon ...</div>
      </div>
    </StyledPassword>
  );
};

export default UserAccount;
