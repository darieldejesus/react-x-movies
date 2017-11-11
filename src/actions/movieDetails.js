import { getMovieDetails } from '../utils/api';

export const FETCH_MOVIE_DETAILS_STARTED = 'FETCH_MOVIE_DETAILS_STARTED';
export const FETCH_MOVIE_DETAILS_COMPLETED = 'FETCH_MOVIE_DETAILS_COMPLETED';
export const FETCH_MOVIE_DETAILS_FAILED = 'FETCH_MOVIE_DETAILS_FAILED';

/**
 * Specify the script is going to fetch the movie details.
 * @returns {Object} - The action and payload.
 */
export const requestMovieDetails = () => ({
  type: FETCH_MOVIE_DETAILS_STARTED,
  payload: '',
});

/**
 * Specify the movie details has been received.
 * @param {Object} details - Movie details.
 * @returns {Object}
 */
export const receiveMovieDetails = details => ({
  type: FETCH_MOVIE_DETAILS_COMPLETED,
  payload: details,
});

/**
 * Specify the request has failed.
 * @param {string} errorMessage
 * @returns {Object} - The action and the error.
 */
export const requestError = errorMessage => ({
  type: FETCH_MOVIE_DETAILS_FAILED,
  isError: true,
  payload: errorMessage,
});

const fetchMovieDetails = (dispatch, movieId) => {
  dispatch(requestMovieDetails());
  return getMovieDetails(movieId)
    .then(details => dispatch(receiveMovieDetails(details)))
    .catch(error => requestError(error));
};

export default fetchMovieDetails;
