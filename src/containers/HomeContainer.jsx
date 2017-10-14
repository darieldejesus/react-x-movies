import { connect } from 'react-redux';

import { homeActions } from '../actions';
import HomePage from "../components/HomePage";

const mapStateToProps = ({ popularMovies }) => popularMovies;
const mapDispatchToProps = dispatch => ({
	fetchPopularMovies: homeActions.fetchPopularMovies(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
