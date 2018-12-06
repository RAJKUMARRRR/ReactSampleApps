import React from "react";
import classes from "./FilterBar.module.css";
class FilterBar extends React.Component {

  state = {
      value:""
  }

  onInputChangeHandler = (event)=>{
      event.preventDefault();
      this.setState({
          value: event.target.value
      });
      if(this.props.onFilterOptionSelected && this.props.onFilterOptionSelected instanceof Function){
        this.props.onFilterOptionSelected(event.target.value);
      }
  }

  render() {
    return (
      <React.Fragment>
        <div className={classes.SortBy}>
          <p className={classes.SortByText}>Sort By:</p>
          <select className={classes.SortByInput} onChange={this.onInputChangeHandler}
          value={this.state.value}
          >
              <option className={classes.SortByOption}></option>
              <option className={classes.SortByOption}>Ratings</option>
              <option className={classes.SortByOption}>Likes</option>
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default FilterBar;
