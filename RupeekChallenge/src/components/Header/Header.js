import React from "react";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderSecondary from "./HeaderSecondary/HeaderSecondary";

const Header = (props) => {
  return (
    <header>
      <HeaderLogo />
      <HeaderSecondary onSearchTextChange = {props.onSearchTextChange} likes = {props.likes} onFilterOptionSelected={props.onFilterOptionSelected}/>
    </header>
  );
};

export default Header;
