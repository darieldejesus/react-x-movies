import { getPopularMovies } from '../utils/api';

export const FETCH_TOP_POPULAR_MOVIES_STARTED = 'FETCH_TOP_POPULAR_MOVIES_STARTED';
export const FETCH_TOP_POPULAR_MOVIES_COMPLETED = 'FETCH_TOP_POPULAR_MOVIES_COMPLETED';
export const FETCH_TOP_POPULAR_MOVIES_FAILED = 'FETCH_TOP_POPULAR_MOVIES_FAILED';

/**
 * Specify the script is going to request the top popular movies.
 * @returns {Object}
 */
export const requestTopPopularMovies = () => ({
  type: FETCH_TOP_POPULAR_MOVIES_STARTED,
  payload: '',
});

/**
 * Specify the top popular movie list has been received.
 * @param {Array} movies - The list of top popular movies.
 * @returns {Object} - The action and payload with the list.
 */
export const receiveTopPopularMovies = movies => ({
  type: FETCH_TOP_POPULAR_MOVIES_COMPLETED,
  payload: movies,
});

/**
 * Specify the request has failed.
 * @param {string} errorMessage
 * @returns {Object} - The error action and the error.
 */
export const requestError = errorMessage => ({
  type: FETCH_TOP_POPULAR_MOVIES_FAILED,
  isError: true,
  payload: errorMessage,
});

/**
 * Fetches the top popular movies from the API.
 * @param {function} dispatch - Redux dispatcher.
 * @returns {Promise}
 */
const fetchTopPopularMovies = (dispatch) => {
  dispatch(requestTopPopularMovies());
  return getPopularMovies()
    .then(movies => dispatch(receiveTopPopularMovies(movies)))
    .catch(errorMessage => dispatch(requestError(errorMessage)));
};

export default fetchTopPopularMovies;
