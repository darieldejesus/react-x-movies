import { getPopularMovies } from '../utils/api';

export const FETCH_POPULAR_MOVIES_STARTED = 'FETCH_POPULAR_MOVIES_STARTED';
export const FETCH_POPULAR_MOVIES_COMPLETED = 'FETCH_POPULAR_MOVIES_COMPLETED';
export const FETCH_POPULAR_MOVIES_FAILED = 'FETCH_POPULAR_MOVIES_FAILED';

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
};
