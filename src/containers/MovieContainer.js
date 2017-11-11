import { connect } from 'react-redux';

import fetchMovieRecommendations from '../actions/movieRecommendationList';
import fetchMovieDetails from '../actions/movieDetails';
import MoviePage from '../components/MoviePage';

/**
 * Maps which properties or the global redux state will be used by this component.
 * @param {Object} movieDetails
 * @param {Array} movieRecommendations
 */
const mapStateToProps = ({ movieDetails, movieRecommendations }) => ({
  movieDetails,
  movieRecommendations,
});

/**
 * Specify which actions will be used by the component.
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
  fetchMovieDetails: (movieId) => {
    fetchMovieDetails(dispatch, movieId);
    fetchMovieRecommendations(dispatch, movieId);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
