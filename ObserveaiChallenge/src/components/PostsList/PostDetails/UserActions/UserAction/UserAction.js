import React from 'react';
import classes from './UserAction.module.css';

const UserAction = (props)=>{
    return (
        <div className={classes.UserAction}>
        <i className={props.type} />
        </div>
        );
}

export default UserAction;