import React from 'react';
import UserAction from './UserAction/UserAction';
import classes from './UserActions.module.css';

const UserActions = ()=>{
    return (
        <div className={classes.UserActions}>
            <UserAction type="fa fa-heart"/>
            <UserAction type="fa fa-comment"/>
            <UserAction type="fa fa-share-alt-square"/>
        </div>
        );
}

export default UserActions;