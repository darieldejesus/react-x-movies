import {
  FETCH_MOVIE_DETAILS_STARTED,
  FETCH_MOVIE_DETAILS_COMPLETED,
  FETCH_MOVIE_DETAILS_FAILED,
} from '../actions/index';

const movieDetailsInitialState = {
  details: [],
  isLoading: false,
};

/**
 * Returns movie details state change
 * or current state if action is not expected
 *
 * @param {Object} currentState - current state
 * @param {Object} action - action dispatched object
 * @returns {Object} State
 */
export default (currentState = movieDetailsInitialState, action) => {
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
