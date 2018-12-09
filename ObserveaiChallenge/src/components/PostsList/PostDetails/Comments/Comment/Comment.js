import React from "react";
import classes from "./Comment.module.css";

const Comment = () => {
  return (
    <div className={classes.Comment}>
      <p>
        <span className={classes.User}>mus_ic_lover</span>
        <span className={classes.CommentText}>Wow</span>
      </p>
      <i className="fa fa-heart Icon" />
    </div>
  );
};

export default Comment;
