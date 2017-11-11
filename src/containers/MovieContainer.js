import { connect } from 'react-redux';

import { movieActions } from '../actions';
import MoviePage from '../components/MoviePage';

const mapStateToProps = ({ movieDetails, movieRecommendations }) => ({
  movieDetails,
  movieRecommendations,
});

const mapDispatchToProps = dispatch => ({
  fetchMovieDetails: (movieId) => {
    movieActions.fetchMovieDetails(dispatch, movieId);
    movieActions.fetchMovieRecommendations(dispatch, movieId);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
