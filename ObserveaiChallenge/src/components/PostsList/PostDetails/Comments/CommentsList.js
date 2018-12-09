import React from 'react';
import Comment from './Comment/Comment';
import classes from './CommentsList.module.css';

const CommentsList = ()=>{
    return (
        <div className={classes.CommentsList}>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    );
}

export default CommentsList;