import React from "react";
import StatisticItem from "./StatisticItem/StatisticItem";
import Button from '../../UI/Button/Button';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  let moreDetails = null;
  let usernameStyle = classes.Username;
  switch(props.type){
      case 'small':
         usernameStyle = classes.UsernameSmall;
         break;
         usernameStyle = classes.UsernameSmall;
         case 'medium':
         break;
         case 'large':
         moreDetails = (      
         <React.Fragment>
         <div className={classes.Row}>
          <StatisticItem title="posts" value="2"/>
          <StatisticItem title="followers" value="23"/>
          <StatisticItem title="following" value="45"/>
        </div>
        <p className={classes.Name}>Balakrishna Avari</p>
        </React.Fragment>
  );
         break;
  }
return (
    <div className={classes.ProfileInfo}>
      <div className={classes.Row}>
        <p className={usernameStyle}>balakrishnaavari</p>
        <Button>Follow</Button>
      </div>
      {
        moreDetails
      }
    </div>
  );
};

export default ProfileInfo;
