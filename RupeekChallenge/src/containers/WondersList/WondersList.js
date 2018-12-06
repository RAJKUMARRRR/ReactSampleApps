import React, { Component } from "react";
import WonderCard from "../../components/WonderCard/WonderCard";
import classes from "./WondersList.module.css";
import axios from '../../wonders-client';

class WondersList extends Component {

  render() {
    let wondersList = <p>Loading</p>

    if(this.props.wondersList){
        wondersList = this.props.wondersList.map(wonder=>{
            return <WonderCard {...wonder} key={wonder.id}/>
        });
    }
    return (
      <main className={classes.Main}>
      {
          wondersList
      }
      </main>
    );
  }
}

export default WondersList;
