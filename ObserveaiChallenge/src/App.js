import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import PostsList from './components/PostsList/PostsList';
import PostDetails from './components/PostsList/PostDetails/PostDetails';
import {Route,Switch,withRouter} from 'react-router-dom';
import NewPost from './components/NewPost/NewPost';

import {connect} from 'react-redux';
import * as actions from './store/actions';



class App extends Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  postCloseHandler = ()=>{
    this.props.history.push("/");
  }

  addNewPostHandler = ()=>{
    this.props.history.push("/new");
  }


  render() {
    let postDetailsRoute = null;
    if(this.props.selectedPost){
      postDetailsRoute = <Route path="/details" render={()=><PostDetails onClose={this.postCloseHandler}/>}/>;
    }
    return (
      <div className="App">
      <Header addNewPostClick = {this.addNewPostHandler}/>
      <main>
        {
          postDetailsRoute
        }
        <Route path="/new" component={NewPost}/>
        <Route path="/" render={()=>(
        <PostsList posts={this.props.posts}/>        
        )}/>
      </main>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
  posts: state.posts,
  selectedPost: state.selectedPost
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    fetchPosts: ()=>dispatch(actions.fetchPosts())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
