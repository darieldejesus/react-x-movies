import { connect } from 'react-redux';

import { popularActions } from '../actions';
import PopularPage from '../components/PopularPage';

const mapStateToProps = ({ popularSectionMovies }) => ({
  popularSectionMovies,
});

const mapDispatchToProps = dispatch => ({
  fetchPopularMovies: page => popularActions.fetchPopularMovies(dispatch, page),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularPage);
