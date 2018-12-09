import React from 'react';
import ProfileImage from './ProfileImage/ProfileImage';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './UserProfile.module.css';

const UserProfile = (props)=>{
    let styleProfile = classes.UserProfile;
    switch(props.type){
        case 'small':
        case 'medium':
        styleProfile = classes.UserProfileSmall
          break;
    }
    return (
        <div className={styleProfile}>
            <ProfileImage type={props.type}/>
            <ProfileInfo type={props.type}/>
        </div>
    );
}

export default UserProfile;