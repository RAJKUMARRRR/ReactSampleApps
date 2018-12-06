import React from "react";
import classes from "./SearchBar.module.css";

class SearchBar extends React.Component {

  state = {
      value:''
  }

  onInputChange = (event)=>{
      this.setState({
          value: event.target.value
      });
      if(this.props.onSearchTextChange && this.props.onSearchTextChange instanceof Function)
      this.props.onSearchTextChange(event.target.value);
  }
  
  render() {
    return (
      <div className={classes.SearchBar}>
        <i className={"fas fa-search " + classes.SearchBarIcon} />
        <input
          type="text"
          className={classes.SearchBarInput}
          placeholder="Search by Name"
          value={this.state.value}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default SearchBar;
