import { connect } from 'react-redux';

import { homeActions } from '../actions';
import HomePage from "../components/HomePage";

const mapStateToProps = ({ popularMovies, topRatedMovies }) => ({
  popularMovies,
  topRatedMovies,
});

const mapDispatchToProps = dispatch => ({
	fetchPopularMovies: () => homeActions.fetchPopularMovies(dispatch),
  fetchTopRatedMovies: () => homeActions.fetchTopRatedMovies(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
