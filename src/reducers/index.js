import { combineReducers } from 'redux';

import {
  FETCH_POPULAR_MOVIES_STARTED,
  FETCH_POPULAR_MOVIES_COMPLETED,
  FETCH_POPULAR_MOVIES_FAILED,

  FETCH_TOP_RATED_MOVIES_STARTED,
  FETCH_TOP_RATED_MOVIES_COMPLETED,
  FETCH_TOP_RATED_MOVIES_FAILED,

  FETCH_POPULAR_SECTION_MOVIES_STARTED,
  FETCH_POPULAR_SECTION_MOVIES_COMPLETED,
  FETCH_POPULAR_SECTION_MOVIES_FAILED,
} from '../actions/index';

const popularMoviesInitialState = {
  popularMovies: [],
  isLoading: false,
};

const popularSectionMoviesInitialState = {
  currentPage: 1,
  initialized: false,
  isLoading: false,
  popularSectionMovies: [],
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
    case FETCH_TOP_RATED_MOVIES_STARTED:
      return { ...currentState, isLoading: true };
    case FETCH_TOP_RATED_MOVIES_COMPLETED:
      return { isLoading: false, topRatedMovies: action.payload };
    case FETCH_TOP_RATED_MOVIES_FAILED:
      return { isLoading: false, topRatedMovies: [] };
    default:
      return currentState;
  }
};

const popularSectionMovies = (currentState = popularSectionMoviesInitialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_SECTION_MOVIES_STARTED:
      return { ...currentState, isLoading: true };
    case FETCH_POPULAR_SECTION_MOVIES_COMPLETED:
      return {
        isLoading: false,
        currentPage: currentState.currentPage + 2,
        popularSectionMovies: currentState.popularSectionMovies.concat(action.payload),
      };
    case FETCH_POPULAR_SECTION_MOVIES_FAILED:
      return { isLoading: false, popularSectionMovies: [] };
    default:
      return currentState;
  }
};

export default combineReducers({
  popularMovies,
  popularSectionMovies,
  topRatedMovies,
});
