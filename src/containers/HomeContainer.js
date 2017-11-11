import { connect } from 'react-redux';

import HomePage from '../components/HomePage';
import fetchTopPopularMovies from '../actions/topPopularMovieList';
import fetchTopRatedMovies from '../actions/topRatedMovieList';

/**
 * Maps which properties of the global state will be used by the component.
 * are going to be used by the home container.
 * @param {Array} popularMovies
 * @param {Array} topRatedMovies
 */
const mapStateToProps = ({ popularMovies, topRatedMovies }) => ({
  popularMovies,
  topRatedMovies,
});

/**
 * Given a redux dispatcher, maps the events that the component will use.
 * @param {function} dispatch
 */
const mapDispatchToProps = dispatch => ({
  fetchTopPopularMovies: () => fetchTopPopularMovies(dispatch),
  fetchTopRatedMovies: () => fetchTopRatedMovies(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
