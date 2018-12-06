import * as actionTypes from './actionTypes';
import axios from '../wonders-client';

export const fetchWondersListSuccess = (data)=>{
    return {
        type: actionTypes.FETCH_WONDERS_SUCCESS,
        wondersList: data.wondersList,
        totalLikes: data.totalLikes
    }
}

export const fetchWondersListFail = (error)=>{
    return {
        type: actionTypes.FETCH_WONDERS_FAIL,
        wondersList: error
    }
}

export const fetchWondersListStart = ()=>{
    return {
        type: actionTypes.FETCH_WONDERS_START
    }
}

export const fetchWondersList = ()=>{
    return dispatch=>{
        dispatch(fetchWondersListStart());
        axios
        .get("")
        .then(response => {
          console.log(response);
          let likes = 0;
          for(let i=0;i<response.data.data.length;i++){
            likes = likes + response.data.data[i].likes*1;
          }
          dispatch(fetchWondersListSuccess({
            wondersList: response.data.data,
            totalLikes: likes
          }));
        })
        .catch(error => dispatch(fetchWondersListFail(error)));
    }
}

export const applyFilter = (filterKey)=>{
    return {
        type: actionTypes.SET_FILTER,
        filterKey: filterKey
    }
}

export const applySearch = (searchText)=>{
    return {
        type: actionTypes.SET_SEARCH_TEXT,
        searchText: searchText
    }
}