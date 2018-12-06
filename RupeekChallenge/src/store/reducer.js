import * as actionTypes from "./actionTypes";

const initialState = {
  wondersList: [],
  filterList: [],
  totalLikes: 0,
  loading: false,
  error: null
};

const onApplyFilter = (state, action) => {
  let sortKey = "ratings";
  if (action.filterKey == "") {
    return {
      ...state,
      filterList: [...state.wondersList]
    };
  }
  if (action.filterKey == "Ratings") {
    sortKey = "ratings";
  } else {
    sortKey = "likes";
  }
  let wonders = [...state.wondersList];
  wonders.sort((one, two) => {
    if (one[sortKey] < two[sortKey]) {
      return 1;
    } else if (one[sortKey] > two[sortKey]) {
      return -1;
    } else {
      return 0;
    }
  });
  return {
    ...state,
    filterList: wonders
  };
};

const onApplySearch = (state, action) => {
  let wonders = [...state.wondersList];
  if (action.searchText) {
    wonders = wonders.filter(record => {
      if (record.place.includes(action.searchText)) {
        return true;
      } else {
        return false;
      }
    });
  }
  return {
    ...state,
    filterList: wonders
  };
};

const fetchWondersSuccess = (state, action) => {
  return {
    ...state,
    wondersList: action.wondersList,
    filterList: action.wondersList,
    totalLikes: action.totalLikes,
    error: null,
    loading: false
  };
};

const fetchWondersFail = (state, action) => {
  return {
    ...state,
    wondersList: [],
    error: action.error,
    loading: false
  };
};

const fetchWondersStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WONDERS_START:
      return fetchWondersStart(state, action);
    case actionTypes.FETCH_WONDERS_SUCCESS:
      return fetchWondersSuccess(state, action);
    case actionTypes.FETCH_WONDERS_FAIL:
      return fetchWondersFail(state, action);
    case actionTypes.SET_FILTER:
      return onApplyFilter(state, action);
    case actionTypes.SET_SEARCH_TEXT:
      return onApplySearch(state, action);
  }
  return state;
};

export default rootReducer;
