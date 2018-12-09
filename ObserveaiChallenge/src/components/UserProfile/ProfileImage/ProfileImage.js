import React from 'react';
import classes from './ProfileImage.module.css';

const ProfileImage = (props)=>{
    let classTemp = classes.Image;
    switch(props.type){
        case 'small':
           classTemp = classes.ProfileImageSmall ;
           break;
           case 'medium':
           classTemp = classes.ProfileImageSmall;
           break;
           case 'large':
           break;
    }
    return (
        <div className={classes.ProfileImage}>
            <img className={classTemp} src="https://randomuser.me/api/portraits/men/74.jpg" alt="Profile"/>
        </div>
    );
}

export default ProfileImage;