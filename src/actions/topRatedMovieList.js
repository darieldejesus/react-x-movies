import { getTopMovies } from '../utils/api';

export const FETCH_TOP_RATED_MOVIES_STARTED = 'FETCH_TOP_RATED_MOVIES_STARTED';
export const FETCH_TOP_RATED_MOVIES_COMPLETED = 'FETCH_TOP_RATED_MOVIES_COMPLETED';
export const FETCH_TOP_RATED_MOVIES_FAILED = 'FETCH_TOP_RATED_MOVIES_FAILED';

/**
 * Specify the script is going to request the list of top rated movies.
 * @returns {Object} - The action and payload.
 */
export const requestTopRatedMovies = () => ({
  type: FETCH_TOP_RATED_MOVIES_STARTED,
  payload: '',
});

/**
 * Specify the list of top rated movies has been received.
 * @param {Array} movies - The list of top rated movies.
 * @returns {Object} - The action and payload.
 */
export const receiveTopRatedMovies = movies => ({
  type: FETCH_TOP_RATED_MOVIES_COMPLETED,
  payload: movies,
});

/**
 * Specify the request has failed.
 * @param {string} errorMessage
 * @returns {Object} - The error action and the error.
 */
export const requestError = errorMessage => ({
  type: FETCH_TOP_RATED_MOVIES_FAILED,
  isError: true,
  payload: errorMessage,
});

/**
 * Fetches the top rated movies from the API.
 * @param {function} dispatch - Redux dispatcher.
 * @returns {Promise}
 */
const fetchTopRatedMovies = (dispatch) => {
  dispatch(requestTopRatedMovies());
  return getTopMovies()
    .then(movies => dispatch(receiveTopRatedMovies(movies)))
    .catch(error => dispatch(requestError(error)));
};

export default fetchTopRatedMovies;
