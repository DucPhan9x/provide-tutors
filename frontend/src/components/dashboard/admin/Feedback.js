import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Table } from "reactstrap";
import { getFeedback } from "../../../redux/actions/getFeedback";

const StyledPassword = styled.section`
  .bg {
    background: #ffffff;
    .user_account {
      height: 500px;
      margin-left: 10px;
    }
  }
`;

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const storeFeedback = useSelector((store) => store.getFeedback);
  useEffect(() => {
    getFeedback();
  }, []);
  useEffect(() => {
    if (!storeFeedback.data) {
      return;
    }
    setFeedbacks(storeFeedback.data.feedbacks);
  }, [storeFeedback]);
  return (
    <StyledPassword>
      <div className="table">
        <Table hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>User</th>
              <th>Content</th>
              <th>Time feedback</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks &&
              feedbacks.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.userId}</td>
                    <td>{item.content}</td>
                    <td>{item.time}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </StyledPassword>
  );
};

export default Feedback;
