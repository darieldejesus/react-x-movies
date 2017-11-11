import { connect } from 'react-redux';

import fetchPopularMovies from '../actions/popularMovieList';
import PopularPage from '../components/PopularPage';

/**
 * Maps the properties of the redux global state that will be used by the component.
 * @param {Array} popularSectionMovies
 */
const mapStateToProps = ({ popularSectionMovies }) => ({
  popularSectionMovies,
});

/**
 * Specify which events will be used by the component.
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
  fetchPopularMovies: page => fetchPopularMovies(dispatch, page),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularPage);
