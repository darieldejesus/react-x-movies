import {
  FETCH_TOP_RATED_MOVIES_STARTED,
  FETCH_TOP_RATED_MOVIES_COMPLETED,
  FETCH_TOP_RATED_MOVIES_FAILED,
} from '../actions/index';

const topRatedMoviesInitialState = {
  topRatedMovies: [],
  isLoading: false,
};


/**
 * Returns the top rated movies state change
 * or current state if action is not expected
 *
 * @param {Object} currentState - current state
 * @param {Object} action - action dispatched object
 * @returns {Object} State
 */
export default (currentState = topRatedMoviesInitialState, action) => {
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
