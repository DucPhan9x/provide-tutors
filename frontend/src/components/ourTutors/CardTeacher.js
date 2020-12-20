import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

function CardTeacher({ subject, grade, time, tutorName, prices, image, auth }) {
  const history = useHistory();
  const [timeDate, setTimeDate] = useState("");
  useEffect(() => {
    if (!time) {
      return;
    }
    setTimeDate(time.join(" and "));
  }, [time]);
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
              Time:<span className="primary">{timeDate}</span>{" "}
            </p>
          </div>
          <div className="card__teacher__inner__avatar__info">
            <h4 className="h4">Tutor name: {tutorName}</h4>

            <div className="card__teacher__inner__avatar__info-position"></div>
          </div>
        </div>
        <div className="card__teacher__inner__block">
          <div className="card__teacher__inner__text"></div>
          <div className="card__teacher__inner__footer">
            <div className="card__teacher__inner__footer__money">
              <h4 className="h4 primary">{prices}VND /Lesson</h4>
              <Button
                color="success"
                onClick={() => {
                  if (!auth.token) history.push("/login");
                }}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTeacher;
