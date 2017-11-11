const API_KEY = process.env.REACT_APP_API_ACCESS_KEY;
const API_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_VERSION}`;

const buildUrl = (path, extra = '') => (
  `${API_URL}/${path}?api_key=${API_KEY}&language=en-US${extra}`
);

export const getPopularMoviesPath = page => buildUrl('movie/popular', `&page=${page}`);

export const getTopMoviesPath = () => buildUrl('movie/top_rated');

export const getMovieDetailsPath = movieId => buildUrl(`movie/${movieId}`);

export const getMovieRecommendationsPath = movieId => buildUrl(`movie/${movieId}/recommendations`);
