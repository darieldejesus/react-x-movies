const API_KEY = '3ed4c209658eec95e5b3cab4c60e673a';
const API_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = (page = 1) => {
  const endPoint = '/movie/popular';
  const requestUrl = `${API_URL}${endPoint}?api_key=${API_KEY}&language=en-US&page=${page}`;
  return fetch(requestUrl)
    .then(response => response.json())
    .then(responseJon => responseJon.results);
};

export const getTopMovies = () => {
  const endPoint = '/movie/top_rated';
  const requestUrl = `${API_URL}${endPoint}?api_key=${API_KEY}&language=en-US`;
  return fetch(requestUrl)
    .then(response => response.json())
    .then(responseJon => responseJon.results);
};

export default {
  getPopularMovies,
  getTopMovies,
};
