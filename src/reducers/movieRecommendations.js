import {
  FETCH_MOVIE_RECOMMENDATIONS_STARTED,
  FETCH_MOVIE_RECOMMENDATIONS_COMPLETED,
  FETCH_MOVIE_RECOMMENDATIONS_FAILED,
} from '../actions/index';

const movieRecommendationsInitialState = {
  movies: [],
  isLoading: false,
};


/**
 * Returns movie recommendations state change
 * or current state if action is not expected
 *
 * @param {Object} currentState - current state
 * @param {Object} action - action dispatched object
 * @returns {Object} State
 */
export default (currentState = movieRecommendationsInitialState, action) => {
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
