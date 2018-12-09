import * as actionTypes from './actionTypes';
import axios from '../posts-client';


export const fetchPostsSuccess = (data)=>{
    data = data.map(item=>{
        item.id = item.timestamp;
        return item;
    });
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: data
    }
}
export const fetchPostsFail = (error)=>{
    return {
        type: actionTypes.FETCH_POSTS_FAIL,
        error:error
    }
}
export const fetchPostsStart = ()=>{
    return {
        type: actionTypes.FETCH_POSTS_START
    }
}
export const fetchPosts = ()=>{
    return dispatch=>{
        dispatch(fetchPostsStart());
        axios.get()
        .then(response=>{
            dispatch(fetchPostsSuccess(response.data));
        })
        .catch(error=>{
            dispatch(fetchPostsFail(error));
        });
    }
}

export const postClicked = (id)=>{
    return {
        type: actionTypes.POST_CLICK,
        postId: id
    }
}

export const deletePost = (id)=>{
    return {
        type: actionTypes.DELETE_POST,
        postId: id
    }
}


export const addPost = (imageBase64)=>{
    return {
        type:actionTypes.ADD_POST,
        image:imageBase64
    }
}