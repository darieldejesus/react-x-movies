import {
  getMovieDetails,
  getMovieRecommendations,
  getPopularMovies,
  getTopMovies,
} from '../utils/api';

export const FETCH_POPULAR_MOVIES_STARTED = 'FETCH_POPULAR_MOVIES_STARTED';
export const FETCH_POPULAR_MOVIES_COMPLETED = 'FETCH_POPULAR_MOVIES_COMPLETED';
export const FETCH_POPULAR_MOVIES_FAILED = 'FETCH_POPULAR_MOVIES_FAILED';

export const FETCH_POPULAR_SECTION_MOVIES_STARTED = 'FETCH_POPULAR_SECTION_MOVIES_STARTED';
export const FETCH_POPULAR_SECTION_MOVIES_COMPLETED = 'FETCH_POPULAR_SECTION_MOVIES_COMPLETED';
export const FETCH_POPULAR_SECTION_MOVIES_FAILED = 'FETCH_POPULAR_SECTION_MOVIES_FAILED';

export const FETCH_TOP_RATED_MOVIES_STARTED = 'FETCH_TOP_RATED_MOVIES_STARTED';
export const FETCH_TOP_RATED_MOVIES_COMPLETED = 'FETCH_TOP_RATED_MOVIES_COMPLETED';
export const FETCH_TOP_RATED_MOVIES_FAILED = 'FETCH_TOP_RATED_MOVIES_FAILED';

export const FETCH_MOVIE_DETAILS_STARTED = 'FETCH_MOVIE_DETAILS_STARTED';
export const FETCH_MOVIE_DETAILS_COMPLETED = 'FETCH_MOVIE_DETAILS_COMPLETED';
export const FETCH_MOVIE_DETAILS_FAILED = 'FETCH_MOVIE_DETAILS_FAILED';

export const FETCH_MOVIE_RECOMMENDATIONS_STARTED = 'FETCH_MOVIE_RECOMMENDATIONS_STARTED';
export const FETCH_MOVIE_RECOMMENDATIONS_COMPLETED = 'FETCH_MOVIE_RECOMMENDATIONS_COMPLETED';
export const FETCH_MOVIE_RECOMMENDATIONS_FAILED = 'FETCH_MOVIE_RECOMMENDATIONS_FAILED';

export const homeActions = {
  fetchPopularMovies(dispatch) {
    dispatch({
      type: FETCH_POPULAR_MOVIES_STARTED,
      payload: '',
    });

    return getPopularMovies()
      .then(movies => dispatch({
        type: FETCH_POPULAR_MOVIES_COMPLETED,
        payload: movies,
      }))
      .catch((error) => {
        dispatch({
          type: FETCH_POPULAR_MOVIES_FAILED,
          isError: true,
          payload: error,
        });
      });
  },

  fetchTopRatedMovies(dispatch) {
    dispatch({
      type: FETCH_TOP_RATED_MOVIES_STARTED,
      payload: '',
    });
    return getTopMovies()
      .then(movies => dispatch({
        type: FETCH_TOP_RATED_MOVIES_COMPLETED,
        payload: movies,
      }))
      .catch(error => dispatch({
        type: FETCH_TOP_RATED_MOVIES_FAILED,
        isError: true,
        payload: error,
      }));
  },
};

export const popularActions = {
  fetchPopularMovies(dispatch, page = 1) {
    dispatch({
      type: FETCH_POPULAR_SECTION_MOVIES_STARTED,
      payload: '',
    });

    return Promise.all([
      // check the how many entires are left
      getPopularMovies(page),
      getPopularMovies(page + 1),
    ])
      .then(([bulk1, bulk2]) => bulk1.concat(bulk2))
      .then(movies => dispatch({
        type: FETCH_POPULAR_SECTION_MOVIES_COMPLETED,
        payload: movies,
      }))
      .catch((error) => {
        dispatch({
          type: FETCH_POPULAR_SECTION_MOVIES_FAILED,
          isError: true,
          payload: error,
        });
      });
  },
};

export const movieActions = {
  fetchMovieDetails(dispatch, movieId) {
    dispatch({
      type: FETCH_MOVIE_DETAILS_STARTED,
      payload: '',
    });

    return getMovieDetails(movieId)
      .then(details => dispatch({
        type: FETCH_MOVIE_DETAILS_COMPLETED,
        payload: details,
      }))
      .catch((error) => {
        dispatch({
          type: FETCH_MOVIE_DETAILS_FAILED,
          isError: true,
          payload: error,
        });
      });
  },
  fetchMovieRecommendations(dispatch, movieId) {
    dispatch({
      type: FETCH_MOVIE_RECOMMENDATIONS_STARTED,
      payload: '',
    });

    return getMovieRecommendations(movieId)
      .then(details => dispatch({
        type: FETCH_MOVIE_RECOMMENDATIONS_COMPLETED,
        payload: details,
      }))
      .catch((error) => {
        dispatch({
          type: FETCH_MOVIE_RECOMMENDATIONS_FAILED,
          isError: true,
          payload: error,
        });
      });
  },
};
