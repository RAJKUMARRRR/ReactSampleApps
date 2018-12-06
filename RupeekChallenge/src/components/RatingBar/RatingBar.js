import React from "react";

const RatingBar = (props) => {
  return (
    <div>
      <i className={props.ratings<=0?"far fa-star":"fas fa-star"}/> 
      <i className={props.ratings<=1?"far fa-star":"fas fa-star"}/>
      <i className={props.ratings<=2?"far fa-star":"fas fa-star"}/>
       <i className={props.ratings<=3?"far fa-star":"fas fa-star"}/>
      <i className={props.ratings<=4?"far fa-star":"fas fa-star"}/>
    </div>
  );
};

export default RatingBar;
