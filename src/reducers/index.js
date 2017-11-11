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

  FETCH_MOVIE_DETAILS_STARTED,
  FETCH_MOVIE_DETAILS_COMPLETED,
  FETCH_MOVIE_DETAILS_FAILED,

  FETCH_MOVIE_RECOMMENDATIONS_STARTED,
  FETCH_MOVIE_RECOMMENDATIONS_COMPLETED,
  FETCH_MOVIE_RECOMMENDATIONS_FAILED,
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

const movieDetailsInitialState = {
  details: [],
  isLoading: false,
};

const movieRecommendationsInitialState = {
  movies: [],
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

const movieDetails = (currentState = movieDetailsInitialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS_STARTED:
      return { ...currentState, isLoading: true };
    case FETCH_MOVIE_DETAILS_COMPLETED:
      return { isLoading: false, details: action.payload };
    case FETCH_MOVIE_DETAILS_FAILED:
      return { isLoading: false, details: [] };
    default:
      return currentState;
  }
};


const movieRecommendations = (currentState = movieRecommendationsInitialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_RECOMMENDATIONS_STARTED:
      return { ...currentState, isLoading: true };
    case FETCH_MOVIE_RECOMMENDATIONS_COMPLETED:
      return { isLoading: false, movies: action.payload };
    case FETCH_MOVIE_RECOMMENDATIONS_FAILED:
      return { isLoading: false, movies: [] };
    default:
      return currentState;
  }
};

export default combineReducers({
  movieDetails,
  movieRecommendations,
  popularMovies,
  popularSectionMovies,
  topRatedMovies,
});
