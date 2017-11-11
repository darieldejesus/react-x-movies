import {
  FETCH_POPULAR_MOVIES_STARTED,
  FETCH_POPULAR_MOVIES_COMPLETED,
  FETCH_POPULAR_MOVIES_FAILED,
} from '../actions/index';

const popularMoviesInitialState = {
  popularMovies: [],
  isLoading: false,
};

/**
 * Returns the popular movies state change
 * or current state if action is not expected
 *
 * @param {Object} currentState - current state
 * @param {Object} action - action dispatched object
 * @returns {Object} State
 */
export default (currentState = popularMoviesInitialState, action) => {
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
