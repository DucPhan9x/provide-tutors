import React from "react";
function CardTeacher({
  name,
  birthYear,
  experiences,
  subjects,
  rating,
  prices,
  image,
  instruments,
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
            {subjects.map((item, index) => {
              return (
                <div>
                  <span>{item}</span>
                  <span> </span>
                </div>
              );
            })}
          </div>
          <div className="card__teacher__inner__avatar__instruments">
            <span className="primary">{instruments}</span>
          </div>
          <div className="card__teacher__inner__avatar__experiences">
            <span className="secondary">Experiences: {experiences}</span>
          </div>
          <div className="card__teacher__inner__avatar__info white">
            <h4 className="h4">{name}</h4>
            <span className="primary">{birthYear} years old</span>
            <div className="card__teacher__inner__avatar__info-position">
              {rating && (
                <div className="star">
                  <i className="icon-star" />
                  <p className="text--small">{Math.round(rating * 10) / 10}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="card__teacher__inner__block">
          <div className="card__teacher__inner__text"></div>
          <div className="card__teacher__inner__footer">
            <div className="card__teacher__inner__footer__money">
              <p className="text--small">Starting at</p>
              <h4 className="h4 primary">{prices}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTeacher;
