import React from "react";
import RatingBar from '../RatingBar/RatingBar';
import classNamees from './WonderCard.module.css';

const WonderCard = (props) => (
  <div className={classNamees.Card}>
    <img src={props.imageURL} alt="" className={classNamees.Img} />
    <div className={classNamees.Footer}>
      <div className={classNamees.Rating}>
        <p>Ratings:</p>
        <RatingBar ratings={props.ratings}/>
      </div>
      <div className={classNamees.Title}>{props.place}</div>
    </div>
    <div className={classNamees.Details}>
      <div className={classNamees.Heart}>
        <i className="fas fa-heart" />
        <p>{props.likes}</p>
      </div>
      <div className={classNamees.DetailsMain}>
        <h3>{props.place}</h3>
        <p>
            {
                props.description
            }
        </p>
      </div>
    </div>
  </div>
);

export default WonderCard;
