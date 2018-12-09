import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.Post} onClick = {()=>props.onClick(props.id)}>
      <div className={classes.Front}>
        <img className={classes.Image}
          src={props.image}
          alt="Post Image"
        />
      </div >
      <div className={classes.Back}>
        <p className={classes.IconText}>
          <span className="fa fa-heart" />{"  "+props.totalLikes}
        </p>
        <p className={classes.IconText} onClick={()=>props.onDeleteClick(props.id)}>
          <span className="fa fa-trash" />
        </p>
      </div>
    </div>
  );
};

export default Post;
