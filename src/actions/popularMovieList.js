import { getPopularMovies } from '../utils/api';

export const FETCH_POPULAR_MOVIES_STARTED = 'FETCH_POPULAR_MOVIES_STARTED';
export const FETCH_POPULAR_MOVIES_COMPLETED = 'FETCH_POPULAR_MOVIES_COMPLETED';
export const FETCH_POPULAR_MOVIES_FAILED = 'FETCH_POPULAR_MOVIES_FAILED';

/**
 * Specify the script is going to request the list of popular movies using pagination.
 * @returns {Object}
 */
export const requestPopularMovies = () => ({
  type: FETCH_POPULAR_MOVIES_STARTED,
  payload: '',
});

/**
 * Specify the list of popular movies has been received.
 * @param {Array} movies - The list of popular movies.
 * @returns {Object} - The action and payload with the entries.
 */
export const receivePopularMovies = movies => ({
  type: FETCH_POPULAR_MOVIES_COMPLETED,
  payload: movies,
});

/**
 * Specify the request has failed.
 * @param {string} errorMessage
 * @returns {Object} - The error action and the error.
 */
export const requestError = errorMessage => ({
  type: FETCH_POPULAR_MOVIES_FAILED,
  isError: true,
  payload: errorMessage,
});

/**
 * Given a page number, fetches the entries on that specify page (and next page as well).
 * @param {function} dispatch - Redux dispatcher
 * @param {number} page - Current page number used to paginate the entries through the API.
 * @returns {Promise}
 */
const fetchPopularMovies = (dispatch, page = 1) => {
  dispatch(requestPopularMovies());
  return Promise.all([
    getPopularMovies(page),
    getPopularMovies(page + 1),
  ])
    .then(([bulk1, bulk2]) => [...bulk1, ...bulk2])
    .then(movies => dispatch(receivePopularMovies(movies)))
    .catch(error => requestError(error));
};

export default fetchPopularMovies;
