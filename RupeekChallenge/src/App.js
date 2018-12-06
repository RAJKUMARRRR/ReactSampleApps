import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import WondersList from "./containers/WondersList/WondersList";
import axios from './wonders-client';

import * as actions from './store/actions';
import {connect} from 'react-redux';
class App extends Component {

  /*state = {
    wondersList: [],
    filterList: [],
    totalLikes: 0
  }


  componentDidMount() {
    axios
      .get("")
      .then(response => {
        console.log(response);
        let likes = 0;
        for(let i=0;i<response.data.data.length;i++){
          likes = likes + response.data.data[i].likes*1;
        }
        this.setState({
          wondersList: response.data.data,
          filterList: response.data.data,
          totalLikes: likes
        });
        this.onSortBy();
      })
      .catch(error => console.log(error));
  }

  onSearch = text => {
    console.log(text);
    let wonders = [...this.state.wondersList]
    if(text){
      wonders = wonders.filter((record)=>{
        if(record.place.includes(text)){
          return true;
        }else{
          return false;
        }
      });  
    }
    this.setState(prevState=>({
      filterList: wonders
    }));
  };

  onSortBy = sortValue =>{
    let sortKey = "ratings";
    if(sortValue == ""){
      this.setState(prevState=>({
        filterList: [...this.state.wondersList]
      }));
        return;
    }
    if(sortValue == "Ratings"){
      sortKey = "ratings";
    }else{
      sortKey = "likes";
    }
    let wonders = [...this.state.wondersList]
    wonders.sort((one,two)=>{
      if(one[sortKey] < two[sortKey]){
        return 1;
      }else if(one[sortKey] > two[sortKey]){
        return -1
      }else{
        return 0;
      }
    });
    this.setState(prevState=>({
      filterList: wonders
    }));
  }
  */

  componentDidMount(){
    this.props.fetchWonders();
  }
  render() {
    return (
      <React.Fragment>
        <Header onSearchTextChange={this.props.onSearch} likes={this.props.totalLikes} onFilterOptionSelected={this.props.onSortBy}/>
        <WondersList/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state=>{
  return {
    totalLikes: state.totalLikes
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    fetchWonders: ()=>dispatch(actions.fetchWondersList()),
    onSearch: (text)=>dispatch(actions.applySearch(text)),
    onSortBy: (filterKey)=>dispatch(actions.applyFilter(filterKey))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
