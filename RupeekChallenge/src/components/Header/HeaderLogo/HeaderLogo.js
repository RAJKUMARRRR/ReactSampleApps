import React from "react";
import classes from "./HeaderLogo.module.css";

const HeaderLogo = () => (
  <React.Fragment>
    <div className={classes.HeaderLogo}>
      <div className={classes.Logo}>
        <img src="logo.svg" alt="" className={classes.LogoImage}/>
      </div>
      <div className={classes.Menu}>
        <i className={'fas fa-bars ' + classes.Icon} />
      </div>
    </div>
  </React.Fragment>
);

export default HeaderLogo;
