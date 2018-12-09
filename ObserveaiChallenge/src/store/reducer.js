import * as actionTypes from './actionTypes';

const initialState = {
    posts:[],
    selectedPost: null,
    totalPosts:0,
    loading:false,
    error:null
}

const fetchPostsSuccess = (state,action)=>{
    return {
        ...state,
        posts: action.posts,
        totalPosts: action.posts.length,
        loading: false,
        error:null
    }
}
const fetchPostsFail = (state,action)=>{
    return {
        ...state,
        loading: false,
        error:action.error
    }
}
const fetchPostsStart = (state,action)=>{
    return {
        ...state,
        loading: true
    }
}

const postClicked = (state,action)=>{
    let post = state.posts.filter(post=>{
        return post.id == action.postId
    });
    return {
        ...state,
        selectedPost: post.length != 0 ? post[0]:null
    }
}

const addPost = (state,action)=>{
    let post = {
        Image: action.image,
        timestamp: new Date().getTime(),
        likes: 0
    }
    let posts = [post,...state.posts];
    return {
        ...state,
        posts: posts
    }
}

const deletePostClicked = (state,action)=>{
    let updatedPosts = state.posts.filter(post=>{
        return post.id != action.postId
    });
    return {
        ...state,
        posts: updatedPosts
    }
}

const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_POSTS_START: return fetchPostsStart(state,action);
        case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess(state,action);
        case actionTypes.FETCH_POSTS_FAIL: return fetchPostsFail(state,action);
        case actionTypes.POST_CLICK: return postClicked(state,action);
        case actionTypes.ADD_POST: return addPost(state,action);
        case actionTypes.DELETE_POST: return deletePostClicked(state,action);
    }
    return state;
}


export default rootReducer;