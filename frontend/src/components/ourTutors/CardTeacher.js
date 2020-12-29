import React, { useState } from "react";
import { Button, Form, Label, FormGroup, Input } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import { useHistory } from "react-router-dom";
import { studentRegisterSchedule } from "../../redux/actions/studentRegisterSchedule";
import styled from "styled-components";
import { getReviews } from "../../redux/actions/getReviews";
const StyledReviewPopup = styled.section`

  .form-info {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    .form__item {
      float: left;
      width: 100%;
      height:100%
      margin-bottom: 10px;
      margin-bottom: -20px; 
    }
    label {
      font-size: 16px;
      font-weight: 600;
    }
    
    .form-group {
      margin: 0 10px 20px 10px;
      input {
        min-height: 36px;
        border-radius: 4px;
        font-size: 12px;
        padding: 8px;
      }
    }
 

`;
function CardTeacher({
  subject,
  grade,
  time,
  tutorName,
  prices,
  image,
  auth,
  scheduleId,
  status,
  tutorId,
}) {
  const history = useHistory();

  const [content, setContent] = React.useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <div className="card__teacher">
      <div className="card__teacher__inner radius-l">
        <div className="card__teacher__inner__avatar">
          <img
            className="card__teacher__inner__avatar__img"
            src={image}
            alt="avatar"
          />
          <div className="card__teacher__inner__avatar__subjects">
            <p className="text--small">
              Subject: <span className="primary">{subject}</span>{" "}
            </p>
          </div>
          <div className="card__teacher__inner__avatar__instruments">
            <p className="text--small">
              Grade: <span className="primary">{grade}</span>{" "}
            </p>
          </div>
          <div className="card__teacher__inner__avatar__experiences">
            <p>
              Time:<span className="primary">{time}</span>{" "}
            </p>
          </div>
          <div className="card__teacher__inner__avatar__info">
            <h4 className="h4">Tutor name: {tutorName}</h4>
          </div>
        </div>
        <div className="card__teacher__inner__block">
          <div className="card__teacher__inner__text"></div>
          <div className="card__teacher__inner__footer">
            <div className="card__teacher__inner__footer__money">
              <h4 className="h4 primary">{prices}$ /Lesson</h4>
              <div>
                <Button
                  disabled={auth && auth.role === 1}
                  color="success"
                  onClick={() => {
                    if (!auth.token || status === 1) {
                      history.push("/login");
                    } else {
                      if (auth.role === 0) {
                        studentRegisterSchedule(
                          { scheduleId: scheduleId },
                          (data) => {
                            if (data.status === 200) {
                              alert("Register schedule success!");
                            } else {
                              alert("Register failed, " + data.msg);
                            }
                          }
                        );
                      }
                    }
                  }}
                >
                  Register
                </Button>

                <Button
                  className="review-btn"
                  disabled={auth && auth.role === 1}
                  color="info"
                  onClick={() => {
                    getReviews(tutorId, (data) => {
                      if (data.status === 200) {
                        setShow(true);
                        setContent(data.reviews);

                        let reviewCmt = "";
                        data.reviews.forEach((element) => {
                          reviewCmt +=
                            element.fullName + " : " + element.content;
                        });
                        setContent(reviewCmt);
                      } else {
                        alert(data.msg);
                      }
                    });
                  }}
                >
                  See Reviews
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="fade_popup centered_addpopup "
        show={show}
        onHide={handleClose}
      >
        <ModalTitle className="lb">REVIEW</ModalTitle>
        <ModalBody>
          {" "}
          <StyledReviewPopup>
            <Form className="form-info">
              <div className="form__item">
                <div className="form__item__inner">
                  <FormGroup>
                    <Label>Tutor Name: {tutorName}</Label>
                    <Input type="textarea" name="text" value={content} />
                  </FormGroup>
                </div>
              </div>
            </Form>
          </StyledReviewPopup>
        </ModalBody>

        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CardTeacher;
