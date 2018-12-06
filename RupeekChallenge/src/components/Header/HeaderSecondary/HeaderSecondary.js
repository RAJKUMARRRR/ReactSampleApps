import React from "react";
import classes from "./HeaderSecondary.module.css";
import SearchBar from './SearchBar/SearchBar';
import FilterBar from './FilterBar/FilterBar';

const HeaderSecondary = (props) => (
  <React.Fragment>
    <div className={classes.HeaderSecondary}>
      <SearchBar onSearchTextChange={props.onSearchTextChange}/>
      <div className={classes.Statistics}>
        <p className={classes.StatisticsText}>Total Likes: {props.likes}</p>
        <p className={classes.StatisticsText}>API Hits: 0</p>
      </div>
      <FilterBar onFilterOptionSelected={props.onFilterOptionSelected}/>
    </div>
  </React.Fragment>
);

export default HeaderSecondary;
