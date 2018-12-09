import React from 'react';
import Post from './Post/Post';
import classes from './PostsList.module.css';

import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import {withRouter} from 'react-router-dom';

class PostsList extends React.Component{

   onPostClickHandler = (postId)=>{
       this.props.postClickHandler(postId);
       this.props.history.push('/details');
   }

   onDeletePostHandler = (postId)=>{
       this.props.deletePost(postId);
   }

    render(){
        let posts =null;
        if(this.props.posts && this.props.posts.map){
           posts= this.props.posts.map((post)=>{
            return <Post
            image={post.Image}
            totalLikes={post.likes}
            totalComments={20}
            key={post.timestamp}
            id={post.id}
            onClick = {this.onPostClickHandler}
            onDeleteClick = {this.onDeletePostHandler}
            />
        }); 
        if(this.props.loading){
            posts = <h3 style={{"text-align":"center"}}>Loading</h3>
        }
        if(this.props.error){
            posts = <h3 style={{"text-align":"center"}}>Unable to load Posts</h3>
        }
        }
        return (
            <div className={classes.Wrapper}>
            <div className={classes.PostsList}>
            {
                posts
            }
            </div>
            </div>
        );    
    }
}
const mapStateToProps = state=>{
    return {
        error: state.error,
        loading: state.loading
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        postClickHandler: (id)=>dispatch(actions.postClicked(id)),
        deletePost: (id)=>dispatch(actions.deletePost(id))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PostsList));