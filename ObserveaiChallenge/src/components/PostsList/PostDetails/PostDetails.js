import React from "react";
import classes from "./PostDetails.module.css";
import UserProfile from "../../UserProfile/UserProfile";
import CommentsList from "./Comments/CommentsList";
import UserActions from "./UserActions/UserActions";
import NewComment from "./Comments/NewComment/NewComment";
import {connect} from 'react-redux';

const PostDetails = (props) => {
  return (
    <div className={classes.PostDetails}>
      <i className={"fa fa-times "+classes.Close} onClick={props.onClose}></i>
      <i className={"fa fa-arrow-left "+classes.CloseMini} onClick={props.onClose}></i>
      <div className={classes.PostDetailsMain}>
        <div className={classes.ImagePostBox}>
          <img
            className={classes.ImagePost}
            src={props.post.Image}
            alt="Post Image"
          />
        </div>
        <div className={classes.PostDetailsContent}>
          <UserProfile type="small"/>
          <CommentsList />
          <UserActions />
          <p className={classes.Likes}>{props.post.likes} likes</p>
          <p className={classes.Date}>OCTOBER 14</p>
          <NewComment />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state=>{
  return {
    post:state.selectedPost
  }
}

export default connect(mapStateToProps)(PostDetails);
