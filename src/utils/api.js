const API_KEY = '{API_KEY_HERE}';
const API_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = () => {
  const endPoint = '/movie/popular';
  const requestUrl = `${API_URL}${endPoint}?api_key=${API_KEY}&language=en-US`;
  return fetch(requestUrl)
    .then(response => response.json())
    .then(responseJon => responseJon.results);
};

export default {
  getPopularMovies,
};
