import { getMovieRecommendations } from '../utils/api';

export const FETCH_MOVIE_RECOMMENDATIONS_STARTED = 'FETCH_MOVIE_RECOMMENDATIONS_STARTED';
export const FETCH_MOVIE_RECOMMENDATIONS_COMPLETED = 'FETCH_MOVIE_RECOMMENDATIONS_COMPLETED';
export const FETCH_MOVIE_RECOMMENDATIONS_FAILED = 'FETCH_MOVIE_RECOMMENDATIONS_FAILED';

/**
 * Specify the script is going to request a list of recommendations.
 * @returns {Object}
 */
export const requestMovieRecommendations = () => ({
  type: FETCH_MOVIE_RECOMMENDATIONS_STARTED,
  payload: '',
});

/**
 * Specify the recommendation list has been received.
 * @param {Array} recommendations - The list of recommendations from the API.
 * @returns {Object} - The action and payload with the recommendations.
 */
export const receiveMovieRecommendations = recommendations => ({
  type: FETCH_MOVIE_RECOMMENDATIONS_COMPLETED,
  payload: recommendations,
});

/**
 * Specify the request has failed.
 * @param {string} errorMessage
 * @returns {Object} - The error action and the error.
 */
export const requestError = errorMessage => ({
  type: FETCH_MOVIE_RECOMMENDATIONS_FAILED,
  isError: true,
  payload: errorMessage,
});

/**
 * Fetches a list of recommendations based on a given movie ID.
 * @param {function} dispatch
 * @param {number} movieId - Movie ID to be used as a reference to fetch the recommendations.
 * @returns {Promise}
 */
const fetchMovieRecommendations = (dispatch, movieId) => {
  dispatch(requestMovieRecommendations());
  return getMovieRecommendations(movieId)
    .then(details => dispatch(receiveMovieRecommendations(details)))
    .catch(error => requestError(error));
};

export default fetchMovieRecommendations;
