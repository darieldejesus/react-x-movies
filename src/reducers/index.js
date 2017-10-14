import { combineReducers } from 'redux';

import {
  FETCH_POPULAR_MOVIES_STARTED,
  FETCH_POPULAR_MOVIES_COMPLETED,
  FETCH_POPULAR_MOVIES_FAILED,
} from '../actions/index';

const initialState = {
  popularMovies: [],
  isLoading: false,
};

const popularMovies = (currentState = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_STARTED:
      return { isLoading: true, ...currentState };
    case FETCH_POPULAR_MOVIES_COMPLETED:
      return { isLoading: false, popularMovies: action.payload };
    case FETCH_POPULAR_MOVIES_FAILED:
      return { isLoading: false, popularMovies: [] };
    default:
      return currentState;
  }
};

export default combineReducers({
  popularMovies,
});
