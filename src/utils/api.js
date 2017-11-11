import {
  getPopularMoviesPath,
  getTopMoviesPath,
  getMovieDetailsPath,
  getMovieRecommendationsPath,
} from '../config/api';

/**
 * Given a page numnber, reaches the API in order to fetch the most popular movies.
 * @param {number} page - Pagination number
 * @returns {Promise}
 */
export const getPopularMovies = (page = 1) => (
  fetch(getPopularMoviesPath(page))
    .then(response => response.json())
    .then(responseJon => responseJon.results)
);

/**
 * Reaches the API in order to fetch the top rated movies.
 * @returns {Promise}
 */
export const getTopMovies = () => (
  fetch(getTopMoviesPath())
    .then(response => response.json())
    .then(responseJon => responseJon.results)
);

/**
 * Reaches the API in order to fetch the details of the specific movie.
 * @param {number} movieId - ID of the movie.
 * @returns {Promise}
 */
export const getMovieDetails = movieId => (
  fetch(getMovieDetailsPath(movieId))
    .then(response => response.json())
);
/**
 * Reaches the API in order to fetch the recommendations of the specific movie.
 * @param {number} movieId - ID of the movie where the recommendations are taken.
 * @returns {Promise}
 */
export const getMovieRecommendations = movieId => (
  fetch(getMovieRecommendationsPath(movieId))
    .then(response => response.json())
    .then(responseJon => responseJon.results)
);
