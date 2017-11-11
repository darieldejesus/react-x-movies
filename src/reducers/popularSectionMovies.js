import {
  FETCH_POPULAR_SECTION_MOVIES_STARTED,
  FETCH_POPULAR_SECTION_MOVIES_COMPLETED,
  FETCH_POPULAR_SECTION_MOVIES_FAILED,
} from '../actions/index';

const popularSectionMoviesInitialState = {
  currentPage: 1,
  initialized: false,
  isLoading: false,
  popularSectionMovies: [],
};


/**
 * Returns the popular section movies state change
 * or current state if action is not expected
 *
 * @param {Object} currentState - current state
 * @param {Object} action - action dispatched object
 * @returns {Object} State
 */
export default (currentState = popularSectionMoviesInitialState, action) => {
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
