import { combineReducers } from 'redux';

import {
  FETCH_POPULAR_MOVIES_STARTED,
  FETCH_POPULAR_MOVIES_COMPLETED,
  FETCH_POPULAR_MOVIES_FAILED,

  FETCH_TOP_MOVIES_STARTED,
  FETCH_TOP_MOVIES_COMPLETED,
  FETCH_TOP_MOVIES_FAILED,
} from '../actions/index';

const popularMoviesInitialState = {
  popularMovies: [],
  isLoading: false,
};

const topRatedMoviesInitialState = {
  topRatedMovies: [],
  isLoading: false,
};

const popularMovies = (currentState = popularMoviesInitialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_STARTED:
      return { ...currentState, isLoading: true };
    case FETCH_POPULAR_MOVIES_COMPLETED:
      return { isLoading: false, popularMovies: action.payload };
    case FETCH_POPULAR_MOVIES_FAILED:
      return { isLoading: false, popularMovies: [] };
    default:
      return currentState;
  }
};

const topRatedMovies = (currentState = topRatedMoviesInitialState, action) => {
  switch (action.type) {
    case FETCH_TOP_MOVIES_STARTED:
      return { ...currentState, isLoading: true };
    case FETCH_TOP_MOVIES_COMPLETED:
      return { isLoading: false, topRatedMovies: action.payload };
    case FETCH_TOP_MOVIES_FAILED:
      return { isLoading: false, topRatedMovies: [] };
    default:
      return currentState;
  }
};

export default combineReducers({
  popularMovies,
  topRatedMovies,
});
