import React from 'react';
import classes from './NewComment.module.css';
import Button from '../../../../UI/Button/Button';

const NewComment = ()=>{
    return (
        <div className={classes.NewComment}>
            <input type="text" placeholder="Add a comment"/>
            <Button>Submit</Button>
        </div>
    );
}

export default NewComment;