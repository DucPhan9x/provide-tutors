import React from "react";
import {Button} from "reactstrap";
function CardTeacher({
  subject,
  grade,
  time,
  tutor_name,
  prices,
  image,
}) {
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
          <p className="text--small">Subject: <span className="primary">{subject}</span> </p>
            
          </div>
          <div className="card__teacher__inner__avatar__instruments">
          <p className="text--small">Grade: <span className="primary">{grade}</span> </p>
            
          </div>
          <div className="card__teacher__inner__avatar__experiences">
            <p>Time:<span className="primary">{time}</span> </p>
          </div>
          <div className="card__teacher__inner__avatar__info">
            <h4 className="h4">{tutor_name}</h4>
          
            <div className="card__teacher__inner__avatar__info-position">
              
            </div>
          </div>
        </div>
        <div className="card__teacher__inner__block">
          <div className="card__teacher__inner__text"></div>
          <div className="card__teacher__inner__footer">
            <div className="card__teacher__inner__footer__money">

              <h4 className="h4 primary">{prices}</h4>
              <Button color="success" >Register</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTeacher;
