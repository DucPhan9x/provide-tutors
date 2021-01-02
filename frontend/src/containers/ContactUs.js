import React, { useState } from "react";
import { Form, Input, Button } from "reactstrap";
import { feedbackSystem } from "../redux/actions/feedbackSystem";
const ContactUs = () => {
  const [comment, setComment] = useState();
  return (
    <h2 className="h2" style={{ height: "100vh" }}>
      <Form>
        <span>Comment:</span>
        <Input
          style={{ width: "100%" }}
          name="comment"
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <Button
          style={{
            outline: "none",
            background: "green",
            color: "wheat",
            textAlign: "center",
          }}
          disabled={!comment}
          onClick={() => {
            feedbackSystem({ content: comment }, (data) => {
              console.log({ content: comment });
              if (data.status === 200) {
                alert("Feedback successfully!, Thank you");
              } else {
                alert("Feedback failed!!!");
              }
            });
          }}
        >
          Send
        </Button>
      </Form>
    </h2>
  );
};
export default ContactUs;
